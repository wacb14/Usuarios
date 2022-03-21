import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}
  getAllUsers() {
    return this.httpClient.get(
      'https://localhost:5001/User/GetAll'
    );
  }
}
