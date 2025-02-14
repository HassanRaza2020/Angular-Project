import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-latestquestion',
  templateUrl: './latestquestion.component.html',
  styleUrls: ['./latestquestion.component.scss']
})
export class LatestquestionComponent {
 
  message:string = '';

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.getTestData().subscribe(response => {
      this.message = response.message;
    });


  }
}
