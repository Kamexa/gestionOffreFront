import { Component, OnInit } from '@angular/core';
import {OffreServiceService} from "../controller/services/offre-service.service";
import {Offre} from "../controller/models/offre";
import {PostuleServiceService} from "../controller/services/postule-service.service";
import {Postule} from "../controller/models/postule";

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  headers=['description','domaine','ville',''];
  offres? : Offre[];
  postule? : Postule;
  constructor(private offreService : OffreServiceService , private postuleService : PostuleServiceService) { }

  ngOnInit(): void {
    this.offreService.findAll().subscribe({
      next : (data) => {
        this.offres = data;
        console.log(data);
      }
    })
  }

apply(offre_id : any,candidat_id : any){
    this.postule!.offre_id = offre_id;
    this.postule!.candidat_id = candidat_id;
  this.postuleService.save(this.postule!).subscribe({
    next : (res) =>{
      console.log(res);
    }
  })
}
}
