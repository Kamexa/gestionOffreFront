import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../models/admin";
import {Observable} from "rxjs";

const baseUrl = 'http://localhost:8084/api/admin';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http : HttpClient) {
  }
  public login(admin : Admin){
    return this.http.post<Admin>(`${baseUrl}/login`,admin);
  }
   findById(id : number) : Observable<Admin>{
    return this.http.get(`${baseUrl}/${id}`);
  }
  public save(admin : Admin){
    return this.http.post<Admin>(`${baseUrl}/`,admin);
  }
  public deleteById(id : number) : Observable<Admin>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  public findAll() : Observable<Admin[]>{
    return this.http.get<Admin[]>(`${baseUrl}/`);
  }
}
