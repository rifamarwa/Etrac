import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  private url = 'https://6308df7d722029d9ddda720a.mockapi.io/';

  getDataAll(baseUrl:any): Observable<any> {
    return this.http.get(this.url+baseUrl);
  }

  getOneData(id:number):Observable<any> {
    return this.http.get(`${this.url+'employee'}/${id}`);
  }

  createData(data:any): Observable<any> {
    return this.http.post(this.url+'employee', data);
  }

  editData(id:number, data:any): Observable<any> {
    return this.http.put(`${this.url+'employee'}/${id}`, data);
  }

  deleteData(id:number): Observable<any> {
    return this.http.delete(this.url+"employee"+"/"+id);
  }
}
