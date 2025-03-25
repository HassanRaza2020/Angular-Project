import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent {

  answers:string[];
  details:any;
  constructor(private apiService:ApiService, private  sharedService:SharedService) { }

  ngOnInit(): void {
    
    this.sharedService.sharedQuestionDetails$.subscribe(response => {
      console.log("Received:", response);
      this.details = response;
      console.log("Question ID:",this.details.question_id);
    })

    this.apiService.getAnswers(this.details.question_id).subscribe(
      (response) => {
        this.answers = response;
        console.log("Answers:", this.answers);
      },
      (error) => {
        console.error('Error:', error);
      }
    );  
    
    

  }



}
