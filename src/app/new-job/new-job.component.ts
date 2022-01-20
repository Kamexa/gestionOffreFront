import { Component, OnInit } from '@angular/core';
import {OffreServiceService} from "../controller/services/offre-service.service";
import {Offre} from "../controller/models/offre";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent {
  postjobForm? :FormGroup;
  constructor(private offreService : OffreServiceService) { }


  newOffre(){
    this.offreService.save().subscribe({
      next : (res) => {
        console.log(res);
      }
    })
  }

}
