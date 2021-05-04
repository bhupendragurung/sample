import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
{path:'student',component:StudentComponent},
{path:'student-detail',component:StudentDetailComponent},
{path:'studentUpdate/:id',component:StudentUpdateComponent},
  
 {path:'**',component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
