import { Component, OnInit } from '@angular/core';
import { Contact } from '@capacitor-community/contacts';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  showCancelButton = 'never';
  isSearchStarted = false;
  searchResults: Contact[] = [];
  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSearch(value): void {
    this.showCancelButton = 'always';
  }

  onCancel(): void {
    this.isSearchStarted = false;
    this.showCancelButton = 'never';
    this.searchResults = [];
  }

  handleChange(data): void {
    const value = data.target.value;
    this.searchResults = [];
    if (value) {
      this.isSearchStarted = true;
      // this.authService.contactList.accessibleContacts.forEach((contact: Contact) => {
      //   for(let i=0;i<contact.phoneNumbers.length;i++) {
      //     let number = (contact.phoneNumbers[i].number.length > 10) ? contact.phoneNumbers[i].number.slice(-10) : contact.phoneNumbers[i].number;
      //     if (number.indexOf(value) !== -1 ) {
      //       contact.organizationRole = number;
      //       this.searchResults.push(contact);
      //       break;
      //     }
      //   }
      // })
      return;
    }
    this.isSearchStarted = false;
  }
}
