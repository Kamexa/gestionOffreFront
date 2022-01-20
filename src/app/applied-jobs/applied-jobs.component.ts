import { Component, OnInit } from '@angular/core';
import {PostuleServiceService} from "../controller/services/postule-service.service";
import {Postule} from "../controller/models/postule";

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  postule? : Postule[];
  headers=['id',''];
  constructor(private postuleService : PostuleServiceService) { }

  ngOnInit(): void {
    this.postuleService.findAll().subscribe({
      next : (data) => {
        this.postule = data;
        console.log(data)
      }
    })
  }

  deletePost(id : number){
    this.postuleService.deleteById(id).subscribe({
      next : (data) => {
        console.log(data);
      }
    })
  }

}
