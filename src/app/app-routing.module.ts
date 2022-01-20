import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OffresComponent} from "./offres/offres.component";
import {NewJobComponent} from "./new-job/new-job.component";
import {AppliedJobsComponent} from "./applied-jobs/applied-jobs.component";

const routes: Routes = [
  {path : 'jobs',component : OffresComponent},
  {path : 'new',component : NewJobComponent},
  {path : 'applied',component : AppliedJobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
