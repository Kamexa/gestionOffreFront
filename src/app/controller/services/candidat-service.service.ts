import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Candidat} from "../models/candidat";
import {Observable} from "rxjs";
const baseUrl = 'http://localhost:8080/api/candidat';
@Injectable({
  providedIn: 'root'
})
export class CandidatServiceService {

  constructor(private http : HttpClient) { }
  public findById(id : number) : Observable<Candidat>{
    return this.http.get(`${baseUrl}/${id}`);
  }
  public save(candidat : Candidat){
    return this.http.post<Candidat>(baseUrl,candidat);
  }
  public deleteById(id : number) : Observable<Candidat>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  public findAll() : Observable<Candidat[]>{
    return this.http.get<Candidat[]>(baseUrl);
  }

  public update(candidat: Candidat) : Observable<Candidat>{
    return this.http.put(`${baseUrl}`,candidat)
  }
}
