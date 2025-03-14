import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

private subcription:Subscription;


categoryList:any[];
addQuestion={description:'',title:'', questionId:''};
responseMessage:string = '';
questionData:string[];

constructor(public dialogRef:MatDialogRef<EditComponent>, private sharedService:SharedService, private apiService:ApiService){}

ngOnInit(){
  this.subcription = this.sharedService.questionId$.subscribe(data=>{
  this.addQuestion.questionId = data;
  console.log("Received1:",this.addQuestion.questionId);
  })
}

closeModal(){
  this.dialogRef.close();
}

editQuestion():void{
this.apiService.editQuestion(this.addQuestion).subscribe(response=>{
  
  this.questionData = response;
  console.log("updated successfully", this.questionData);
});

}





}
