import { Component ,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.scss']
})
export class PostQuestionComponent {

   categoryList:any[];
   addQuestion={description:'',title:'',category:'', user_id:'',username: ''};
   responseMessage:string = '';
   userId:string = '';
   userName:string = '';


  constructor(private apiService:ApiService, private http:HttpClient, private router:Router ){
    this.apiService.getCategory().subscribe(response=>{
        this.categoryList =   response;
        this.addQuestion.user_id = localStorage.getItem('user_id');
        this.addQuestion.username = localStorage.getItem('username');


    })
  }


  sentQuestionRequest():void{

    if(this.addQuestion.category && this.addQuestion.description && this.addQuestion.title && this.addQuestion.user_id && this.addQuestion.username ){

    this.apiService.postQuestion(this.addQuestion).subscribe({
      next:(response)=>{
      this.addQuestion = response;
      this.router.navigate(['/question']);
    },
    error: (error) => {
      console.error('Error:', error);
      this.responseMessage = 'Registration failed. Please try again.';
    },
  });    

    }
    else {
      console.log("fields are not set!!!")
    }


  }

}
