import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../service/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent  {

  students!:any;
  student! : Student;
  suscription! : Subscription

constructor(
  private studentService:StudentService,
  private activatedRoute:ActivatedRoute
){ }

  // ngOnInit(): void {
    
  //   this.suscription = this.studentService.obtenerEstudiantes().subscribe( (studentObservable : Student[]) => {

  //     this.students = studentObservable
      
  //   })
    
    // this.activatedRoute.params
    // .subscribe( ({id}) => {
    //   this.student = this.students.find( (stu : Student) => stu.id.toString() === id )
    //   console.log(this.student)
    // })
  //}


}


