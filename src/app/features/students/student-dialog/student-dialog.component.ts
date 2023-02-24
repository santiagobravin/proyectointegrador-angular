import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Student } from 'src/app/features/students/models/student';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  
})
export class StudentDialogComponent {
  nameControl = new FormControl();
  ageControl = new FormControl();
  nationalityControl = new FormControl()
  studentForm = new FormGroup({
    name:this.nameControl,
    age: this.ageControl,
    nationality: this.nationalityControl
  })

  constructor(private readonly dialogRef:DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null,) {
    console.log(data);
    if(data){
      this.studentForm.patchValue(data)
    }
  }

  close(){
    this.dialogRef.close()
  }
}
