import {Component, Input, OnInit} from '@angular/core';
import {OffreServiceService} from "../controller/services/offre-service.service";
import {Offre} from "../controller/models/offre";


@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent {

  constructor(private offreService : OffreServiceService) { }

  @Input() offre: Offre = new Offre();

  newOffre(){
    this.offreService.save(this.offre).subscribe((data : {}) => {
      console.log(data);
      }
    )
  }

}
