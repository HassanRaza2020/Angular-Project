import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-post-answers',
  templateUrl: './post-answers.component.html',
  styleUrls: ['./post-answers.component.scss']
})
export class PostAnswersComponent {

data=[];
constructor(private apiService: ApiService) { }

ngOnInit(): void {
  this.apiService.getQuestion().subscribe(response => {
    this.data = response;
    console.log("Question data:", this.data);
  });}

}
