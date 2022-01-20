import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../models/offre";
const baseUrl = 'http://localhost:8084/api/offre';
@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {

  constructor(private http : HttpClient) { }
  public findById(id : number) : Observable<Offre>{
    return this.http.get(`${baseUrl}/${id}`);
  }
  public save(offre : Offre){
    return this.http.post<Offre>(`${baseUrl}/`,offre);
  }
  public deleteById(id : number) : Observable<Offre>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  public findAll() : Observable<Offre[]>{
    return this.http.get<Offre[]>(`${baseUrl}/`);
  }

  public update(offre: Offre) : Observable<Offre>{
    return this.http.put(`${baseUrl}/`,offre)
  }
}
