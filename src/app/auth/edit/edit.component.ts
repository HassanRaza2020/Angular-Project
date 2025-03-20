import { Component, OnInit, OnDestroy,ChangeDetectorRef} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar/snackbar.component';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ViewChild } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

private subcription:Subscription;
categoryList:any[];
addQuestion={description:'',title:'', question_id:''};
responseMessage:string = '';
questionData:string[];
message:string="Message edited successfully";
isVisible:boolean=true;

@ViewChild(QuestionsComponent) questionComponent: QuestionsComponent;



constructor(public dialogRef:MatDialogRef<EditComponent>, private sharedService:SharedService, 
  private apiService:ApiService, private snackBar:MatSnackBar, private router:Router){}

ngOnInit(){
  this.subcription = this.sharedService.questionId$.subscribe(data=>{
  this.addQuestion.question_id = data;
  console.log("Received1:",this.addQuestion.question_id);
  })
}

closeModal(){
  this.dialogRef.close();
}

editQuestion(): void {
  this.apiService.editQuestion(this.addQuestion).subscribe(
    (response) => {
      console.log("Updated successfully:", response);
      this.refreshComponent();
      this.snackBar.openFromComponent(SnackbarComponent, {
        data: this.message,
        duration: 3000});
    },
    (error) => {
      console.error("Update Failed:", error);
    }
  );}


  refreshComponent() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/question']);
    });
  }



}
