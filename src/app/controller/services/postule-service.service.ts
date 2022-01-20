import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Postule} from "../models/postule";
const baseUrl = 'http://localhost:8084/api/postule';
@Injectable({
  providedIn: 'root'
})
export class PostuleServiceService {

  constructor(private http : HttpClient) { }
  public findById(id : number) : Observable<Postule>{
    return this.http.get(`${baseUrl}/${id}`);
  }
  public save(postule : Postule){
    return this.http.post<Postule>(`${baseUrl}/`,postule);
  }
  public deleteById(id : number) : Observable<Postule>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  public findAll() : Observable<Postule[]>{
    return this.http.get<Postule[]>(`${baseUrl}/`);
  }

  public update(postule: Postule) : Observable<Postule>{
    return this.http.put(`${baseUrl}/`,postule)
  }
}
