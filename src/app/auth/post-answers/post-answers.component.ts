import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
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
responseMessage: string = '';
constructor(public route:ActivatedRoute, private apiService:ApiService) { }

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
      this.responseMessage = 'Answer posted successfully.';
    },
    error: (error) => {
      console.error('Error:', error);
      this.responseMessage = 'Failed to post answer. Please try again.';
    },
    complete: () => {
      console.log("Completed");
    }
  });
}
}
