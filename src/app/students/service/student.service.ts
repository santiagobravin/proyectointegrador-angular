import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { StudentDialogComponent } from '../components/student-dialog/student-dialog.component';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly urlapi = "https://6407771c862956433e708849.mockapi.io/"

  private students! : Student[]

  private students$!:BehaviorSubject<Student[]> 

  constructor(
    private dialogService: MatDialog,
    private http:HttpClient
  )
  { 

   // this.students$ = new BehaviorSubject(this.students)

  }

  obtenerEstudiantes(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.urlapi}/Estudiantes`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }


  agregarEstudiante(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this.urlapi}/estudiantes`,student, {
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

 

  editarEstudiante(student : Student): Observable<Student>{
    return this.http.put<Student>(`${this.urlapi}/Estudiantes/${student.id}`, student, {
      headers: new HttpHeaders({
        
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }


 

  borrarEstudiante(student: Student): Observable<Student>{
    return this.http.delete<Student>(`${this.urlapi}/Estudiantes/${student.id}`, {

    }).pipe(
      catchError(this.capturarError)
    );
  }
 






  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de cursos'));
  }
 
}    