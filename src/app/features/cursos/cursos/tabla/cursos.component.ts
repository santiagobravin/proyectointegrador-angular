import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../models/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  filtro!:string;
  cursos : Curso[] = [
    {

      nombre: "Angular",
      comision:"5453",
      profesor:
      {
        nombre : "Abner",
        correo : "abner@gmail.com",
        fechaReg : new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 0 , 1),
      fechaFin: new Date(2023, 2, 15), 
      inscripcionAbierta: true
    },

    {

      nombre: "Node",
      comision:"5153",
      profesor:
      {
        nombre : "Lucas",
        correo : "lucas@gmail.com",
        fechaReg : new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 1 , 1),
      fechaFin: new Date(2023, 4, 15), 
      inscripcionAbierta: false
    },

    {

      nombre: "Vue",
      comision:"5853",
      profesor:
      {
        nombre : "Piatti",
        correo : "Piatti@gmail.com",
        fechaReg : new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 7 , 8),
      fechaFin: new Date(2023, 10, 12), 
      inscripcionAbierta: true
    }
  ];

  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos)
  columnas: string[] = ["comision", "nombre", "profesor", "fechaInicio", "fechaFin", "inscripcionAbierta"]


// constructor(
//   private readonly dialogService: MatDialog
  
//   ){}





// addStudent(){
//   const dialog = this.dialogService.open(StudentDialogComponent)
//   dialog.afterClosed().subscribe((value => {
//     if (value){
//       const lastId = this.students[this.students.length - 1]?.id;
      
//       this.students = [...this.students, new Student(lastId + 1, value.name, value.age, value.nationality)]
//     }
//   }))
// }

// deleteStudent(student: Student){
//   this.students = this.students.filter(stu => stu.id != student.id)
// }

// editStudent(student:Student){
//   const dialog = this.dialogService.open(StudentDialogComponent, {
//     data: student,
//   })

//   dialog.afterClosed().subscribe((data)=>{
//     if(data){
//       this.students = this.students.map(stu => stu.id === student.id ? {...stu, ...data} : stu)
//     }
//   })
// }      

// } 


}