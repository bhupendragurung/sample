import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import{Toast, ToastrModule} from "ngx-toastr";

import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HomeComponent } from './home/home.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ServerErrorComponent,
    StudentComponent,
    StudentDetailComponent,
    HomeComponent,
    StudentUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
 ReactiveFormsModule,
 ToastrModule.forRoot({
  positionClass:'toast-bottom-right'
})
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
