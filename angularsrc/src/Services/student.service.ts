import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stderr } from 'process';
import { Observable } from 'rxjs';
import { Student } from '../app/_models/Student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseurl = 'https://localhost:44354/api/Students/';

  constructor(private http:HttpClient) { }

  GetStudent() {
    return this.http.get(this.baseurl + 'GetStudent');
  }
  GetStudentById(id:any) {
    debugger;
    return this.http.get(this.baseurl + 'GetStudentById/'+id);
  }
  AddStudent(std:Student) :Observable<any>{
    debugger;
   
    return this.http.post(this.baseurl + 'InsertStudent',std);
  }
  RemoveStudent(id:any) {
    return this.http.delete(this.baseurl + 'DeleteStudent/'+id);
  }
  UpdateStudent(student:any ) {
    debugger;
    return this.http.put(this.baseurl + 'UpdateStudent',student);
  }
}
