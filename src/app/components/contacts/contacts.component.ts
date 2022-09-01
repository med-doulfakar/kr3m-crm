import { Component, OnInit } from '@angular/core';
import { Client } from './models/client.model';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  clients: Client[] = [];
  pageNo = 0;
  pageSize = 15;
  pages: number[] = [];
  allClients: Client[] = [];

  constructor(private contactsService: ContactService) {}

  ngOnInit(): void {
    this.getData(this.pageNo);
  }

  getData(pageNo: number) {
    this.contactsService.GetPaginateContacts(pageNo, this.pageSize).subscribe(
      (res) => {
        this.clients = res.users;
        this.allClients = res.users;
        this.updatePages(res.total);
      },
      (err) => {
        this.clients = [];
      }
    );
  }

  filterData(e: Event): void {
    const value = (e.target as HTMLInputElement).value
     if (value == '') {
      this.clients = this.allClients;
    } else {
      this.clients = this.allClients.filter(
        (c) =>
          c.firstName.toLowerCase().includes(value.toLowerCase()) ||
          c.lastName.toLowerCase().includes(value.toLowerCase()) ||
          c.company?.name.toLowerCase().includes(value.toLowerCase()) ||
          c.domain.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  updatePages(total: number) {
    this.pages = Array(Math.ceil(total / this.pageSize));
  }
}
