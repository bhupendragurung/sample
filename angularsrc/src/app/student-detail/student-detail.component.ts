import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/Services/student.service';
import { Student } from '../_models/Student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
studentForm:FormGroup;
  constructor(private studentservice:StudentService,private toastr:ToastrService, private router:Router) { }
std: Student;
  ngOnInit(): void {
    this.std= new Student();
    this.initializeForm();
  }

  initializeForm(){
    this.studentForm =new FormGroup({
      Id : new FormControl('0'),
      FirstName : new FormControl('',Validators.required),
      LastName:new FormControl('',Validators.required),
      DateOfBirth: new FormControl('',Validators.required),
      Email: new FormControl('',Validators.required),
      Address: new FormControl('',Validators.required),
      Course:new FormControl('',Validators.required),
      Department: new FormControl('',Validators.required),
      
    });
  }

  AddStudent(){
    debugger;
    this.std.Address=this.studentForm.get('Address').value;
    this.std.FirstName=this.studentForm.get('FirstName').value;
    this.std.LastName=this.studentForm.get('LastName').value;
    this.std.DateOfBirth= new Date(this.studentForm.get('DateOfBirth').value);
    this.std.Department=this.studentForm.get('Department').value;
    this.std.Id=0;
    this.std.Course=this.studentForm.get('Course').value;
    this.std.Email=this.studentForm.get('Email').value;
    this.studentservice.AddStudent(this.std).subscribe(res =>{
     
        this.toastr.success('Student Added Successfully');
   this.router.navigateByUrl('/home');
    }, error =>{console.log(error);
      this.toastr.error('Something went wrong');
    }
    )
  }
}
