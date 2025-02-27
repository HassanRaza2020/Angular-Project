import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

 //message = {username:'', title:'',update_at:''};

message =[];
  constructor(private apiService:ApiService, public datepipe:DatePipe){}

  ngOnInit(): void {
    this.apiService.getQuestion().subscribe(response=>{
      this.message = response;
      console.log("data",this.message);
    })

    };



}
