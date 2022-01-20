import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffresComponent } from './offres/offres.component';
import { NewJobComponent } from './new-job/new-job.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OffresComponent,
    NewJobComponent,
    AppliedJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
