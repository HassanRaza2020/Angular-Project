import { Component ,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.scss']
})
export class PostQuestionComponent {

   categoryList:string[];

  constructor(private apiService:ApiService ){
   
    this.apiService.getCategory().subscribe(response=>{
        this.categoryList = response;

    })

  }


}
