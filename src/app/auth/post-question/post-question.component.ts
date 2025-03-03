import { Component ,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.scss']
})
export class PostQuestionComponent {

   categoryList:any[];
   addQuestion={description:'',title:'',category:'', user_id:'',username: ''};
   


  constructor(private apiService:ApiService, private http:HttpClient ){
    this.apiService.getCategory().subscribe(response=>{
        this.categoryList =   response;

    })
  }


  sentQuestionRequest():void{
   
    console.log("Form Data:", this.addQuestion);
    this.http.post('http://localhost:8000/api/post-question', this.addQuestion).subscribe(
      (response)=>{
        console.log("Question submitted successfully:", response);

      },
      (error)=>{
        console.error(":Error submitting question: ", error);
      }

    );


  }

}
