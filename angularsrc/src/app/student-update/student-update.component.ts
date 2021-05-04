import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/Services/student.service';
import { Student } from '../_models/Student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
id:any;
std: Student;
  constructor( private studentservice:StudentService, private route:ActivatedRoute, private router:Router ,private toastr:ToastrService ) { }
  studentForm:FormGroup;
  ngOnInit(): void {
    debugger;
    this.std= new Student();
    this.initializeForm();
    this.id= this.route.snapshot.params['id'];
    this.getStudentById();

  }
getStudentById(){
  debugger;
  this.studentservice.GetStudentById(this.id).subscribe((res:Student)=>
  {
    console.log(res);
    this.studentForm.patchValue(res);
  })
}

  initializeForm(){
    this.studentForm =new FormGroup({
      FirstName : new FormControl('',Validators.required),
      LastName:new FormControl('',Validators.required),
      DateOfBirth: new FormControl('',Validators.required),
      Email: new FormControl('',Validators.required),
      Address: new FormControl('',Validators.required),
      Course:new FormControl('',Validators.required),
      Department: new FormControl('',Validators.required),
      
    });
  }

  UpdateStudent(){
    debugger;
    this.std.Address=this.studentForm.get('Address').value;
    this.std.FirstName=this.studentForm.get('FirstName').value;
    this.std.LastName=this.studentForm.get('LastName').value;
    this.std.DateOfBirth= new Date(this.studentForm.get('DateOfBirth').value);
    this.std.Department=this.studentForm.get('Department').value;
    this.std.Id=this.id;
    this.std.Course=this.studentForm.get('Course').value;
    this.std.Email=this.studentForm.get('Email').value;
    this.studentservice.UpdateStudent(this.std).subscribe(res =>{
     
      this.toastr.success('Student Updated Successfully');
 this.router.navigateByUrl('/home');
  }, error =>{console.log(error);
    this.toastr.error('Something went wrong');
  }
  )
  }
}
