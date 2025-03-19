import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-latestquestion',
  templateUrl: './latestquestion.component.html',
  styleUrls: ['./latestquestion.component.scss']
})
export class LatestquestionComponent {
 
  message=[];

  constructor(private apiService:ApiService, public datepipe:DatePipe){}

  ngOnInit(): void {
    this.apiService.getLatestQuestion().subscribe(response => {
      if (Array.isArray(response)) {
        this.message = response; // ✅ Set if it's an array
      } else {
        this.message = [response]; // ✅ Convert object to array
      }
    });


  }
}
