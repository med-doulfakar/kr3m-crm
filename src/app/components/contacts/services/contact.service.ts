import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

export interface ContactResult {
  users: Client[];
  total: number;
  skip: number;
  limit: number;
}
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  GetPaginateContacts(
    pageNo: number = 0,
    pageSize: number = 10
  ): Observable<ContactResult> {
    return this.http.get<ContactResult>(
      `https://dummyjson.com/users?limit=${pageSize}&skip=${pageNo * pageSize}`
    );
  }
}
