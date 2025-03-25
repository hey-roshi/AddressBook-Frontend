import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  persons: any[] = []; // Declare persons dynamically but don't initialize with data

  constructor(private router: Router) {}

  ngOnInit() {
    // Retrieve persons data dynamically from localStorage
    const storedPersons = localStorage.getItem('persons');
    console.log('Retrieved persons:', storedPersons); // Log retrieved data from localStorage
    this.persons = storedPersons ? JSON.parse(storedPersons) : []; // If no data, initialize as an empty array
    console.log('Persons:', this.persons); // Log initialized persons array
  }

  navigateToAddPerson() {
    this.router.navigate(['/add-person']); // Navigate to Add Person page
  }

  editPerson(person: any, index: number) {
    // Save the person being edited in localStorage
    localStorage.setItem('editPersonIndex', JSON.stringify(index));
    localStorage.setItem('editPerson', JSON.stringify(person));

    // Navigate to the Add Person form page
    this.navigateToAddPerson();
  }

  deletePerson(person: any) {
    console.log('Deleting person:', person); // Check the person being deleted
    this.persons = this.persons.filter(p => p !== person); // Filter out the person to delete
    console.log('Updated persons:', this.persons); // Log updated array
    localStorage.setItem('persons', JSON.stringify(this.persons)); // Update localStorage
  }
}
