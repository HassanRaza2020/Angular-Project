import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

constructor(public dialogRef:MatDialogRef<EditComponent>){}

closeModal(){
  this.dialogRef.close();
}



}
