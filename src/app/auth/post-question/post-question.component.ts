import { Component ,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.scss']
})
export class PostQuestionComponent {

   categoryList:string[];
   addQuestion:string[];

  constructor(private apiService:ApiService ){
   
    this.apiService.getCategory().subscribe(response=>{
        this.categoryList = response;

    })


    
  }


  sentQuestionRequest(){
    this.apiService.postQuestion(this.addQuestion).subscribe({
      next:(response)=>{

        this.addQuestion = response;
        console.log("data sent:", this.addQuestion);

      }
    })
      

  }

}
