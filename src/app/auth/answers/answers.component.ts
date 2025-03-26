import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';
import { SnackbarComponent } from 'src/app/snackbar/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditAnswerComponent } from '../edit-answer/edit-answer.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent {

  answers:string[];
  details:any;
  constructor(private apiService:ApiService, private sharedService:SharedService, public datepipe:DatePipe, private snackBar:MatSnackBar, private dialog:MatDialog) { }

  ngOnInit(): void {
    
    this.sharedService.sharedQuestionDetails$.subscribe(response => {
      console.log("Received:", response);
      this.details = response;
      console.log("Question ID:",this.details.question_id);
    })

    this.apiService.getAnswers(localStorage.getItem('question_id')).subscribe(
      (response) => {
        this.answers = response;
        console.log("Answers:", this.answers);
      },
      (error) => {
        console.error('Error:', error);
      }
    );  
    
  }


  deleteAnswer(answerKey: number) {
      this.apiService.deleteAnswer(answerKey).subscribe(data => {
        console.log("Deleted successfully:", data, answerKey);
        this.snackBar.openFromComponent(SnackbarComponent, {
          data: "Question deleted successfully",
          duration: 3000
        });
       
        if (this.answers) {
          this.answers = this.answers.filter(q => q['answer_id'] !== answerKey);
        }
  
      });
  
    }

    openModal() {
        this.dialog.open(EditAnswerComponent, {
          width: '450px',
          height: '500px',
          data: { message: 'Hello form parent component!' }
        });
    
      }

      setAnswerId(answerId:any){
        this.sharedService.setAnswer(answerId); 
      }

}
