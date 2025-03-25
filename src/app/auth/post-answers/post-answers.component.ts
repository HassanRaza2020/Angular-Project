import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/snackbar/snackbar/snackbar.component'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-post-answers',
  templateUrl: './post-answers.component.html',
  styleUrls: ['./post-answers.component.scss']
})
export class PostAnswersComponent {

questionData=[];
userId:string='';
userName:string='';
addAnswer = { description: '', question_id: '', user_id: '', username: '' };
constructor(public route:ActivatedRoute, private apiService:ApiService ,private snackBar:MatSnackBar, 
private router:Router, private sharedSerivce:SharedService) { }

ngOnInit(): void {
  this.route.paramMap.subscribe(() => {
    this.questionData = history.state.data;
    this.addAnswer.user_id = localStorage.getItem('user_id') || '';
    this.addAnswer.username = localStorage.getItem('username') || '';
    this.addAnswer.question_id = this.questionData['question_id'];
    console.log("Question Data:", this.questionData);
  });
}

postAnswer(): void {
  this.apiService.postAnswer(this.addAnswer).subscribe({
    next: (response) => {
      console.log("Response:", response);
     // this.refreshComponent();
     this.sendQuestionDetails();
   },
    error: (error) => {
      console.error('Error:', error);
      },
    complete: () => {
      console.log("Completed");
    }
  });
}


refreshComponent() {
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/view-answer'], { state: { data: this.questionData } });
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: "Answer posted successfully",
      duration: 3000});
  });
}

sendQuestionDetails() {
  console.log('Sending:', this.addAnswer);
  this.sharedSerivce.updateQuestionDetails(this.addAnswer);
  this.router.navigate(['/answers']);
  

}

}