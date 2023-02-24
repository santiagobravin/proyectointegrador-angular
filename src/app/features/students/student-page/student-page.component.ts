import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from '../models/student';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: []
})
export class StudentPageComponent {
  students: Student[] = [
    new Student(1, "Orlando, Eleonora", 25, "Argentino"),
    new Student(2, "Orona, Francisco", 26, "Argentino"),
    new Student(3, "Brookshear, Gleen", 31, "Estadounidense"),
    new Student(4, "Esquilo", 22, "Griego"),
  ]

  displayedColumns = ["id", "name", "age", "nationality", 'edit', 'delete' ]

  constructor(
    private readonly dialogService: MatDialog
    
    ){}





  addStudent(){
    const dialog = this.dialogService.open(StudentDialogComponent)
    dialog.afterClosed().subscribe((value => {
      if (value){
        const lastId = this.students[this.students.length - 1]?.id;
        
        this.students = [...this.students, new Student(lastId + 1, value.name, value.age, value.nationality)]
      }
    }))
  }

  deleteStudent(student: Student){
    this.students = this.students.filter(stu => stu.id != student.id)
  }

  editStudent(student:Student){
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data)=>{
      if(data){
        this.students = this.students.map(stu => stu.id === student.id ? {...stu, ...data} : stu)
      }
    })
  }      
  
} 
