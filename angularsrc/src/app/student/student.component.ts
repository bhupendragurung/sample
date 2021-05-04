import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/Services/student.service';
import { Student } from '../_models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentlist: Student[];
  constructor(private studentservice:StudentService,private router :Router,private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.GetStudent();
  }
  
  DeleteStudent(id:any){
    debugger;
      this.studentservice.RemoveStudent(id).subscribe(res =>{
        this.toastr.success("Deleted Successfully");
        this.GetStudent();
      }, error =>{console.log(error);
        this.toastr.error('Something went wrong');
      });
  }
GetStudent(){
  debugger;
  this.studentservice.GetStudent().subscribe((response: Student[]) =>{
    this.studentlist = response;
  });
}
}
