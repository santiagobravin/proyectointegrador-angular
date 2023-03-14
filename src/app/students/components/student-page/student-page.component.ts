import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/students/models/student';
import { StudentService } from '../../service/student.service';
import { Observable, Subscription } from 'rxjs';
import { Sesion } from 'src/app/core/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: []
})
export class StudentPageComponent implements OnInit {
  
  students!: Student[]
  dataSource!: MatTableDataSource<Student>
  displayedColumns = ["id", "nombre", "edad", "curso", "editar", "borrar", "detalle" ]
  //suscription!:Subscription;
  sesion$! : Observable<Sesion>
  dialogService: MatDialog | any;
  
  constructor(
    
    public studentService : StudentService,
    private sesionService : SesionService
    ){}

    ngOnInit(): void {
      
      this.dataSource = new MatTableDataSource<Student>();

      // this.suscription = this.studentService.obtenerEstudiantes().subscribe((estudiantesObservable : Student[]) => {
      //   this.dataSource.data = estudiantesObservable

        this.studentService.obtenerEstudiantes().subscribe((data : Student[]) => {
        this.dataSource.data = data

        this.sesion$ = this.sesionService.obtenerSesion()
        
      })
    }

    agregarEstudiante() {
      const dialog = this.dialogService.open(StudentDialogComponent)
      dialog.afterClosed().subscribe(((value: Student) => {
        if (value){
          const lastId = this.students[this.students.length - 1]?.id;
 
          let student = { id:lastId + 1,nombre:value.nombre, edad: value.edad, curso : value.curso}
          this.studentService.agregarEstudiante(student).subscribe()
        }
        
      }))
     
    }


    editarEstudiante(student:Student){
      const dialog = this.dialogService.open(StudentDialogComponent, {
        data: student,
      })
  
      dialog.afterClosed().subscribe((data : Student)=>{
        if(data){
          let student : Student = {
            nombre: data.nombre,
            curso: data.curso,
            edad: data.edad, 
            id: data.id
          }
        }
        this.studentService.editarEstudiante.subscribe()
      })
    }  

    ngOnDestroy(): void {
      //this.suscription.unsubscribe()
    }
  
} 
