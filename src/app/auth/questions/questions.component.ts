import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {


message =[];
searchData:any;

  constructor(private apiService:ApiService, public datepipe:DatePipe, public sharedService:SharedService){}

  ngOnInit(): void {   
    this.apiService.getQuestion().subscribe(response=>{
      this.message = response;
      console.log("data",this.message);

     this.sharedService.searchData$.subscribe(data=>{
      console.log("Received Search Data:", data);
      this.searchData = data;
     })

    })


    };



}
