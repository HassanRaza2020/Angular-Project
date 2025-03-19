import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DatePipe } from '@angular/common';
import { SharedService } from 'src/app/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent {


  user_id: string = '';
  message = [];
  searchData = [];
  questions = [];
  questionId: string = '';

  constructor(private apiService: ApiService, public datepipe: DatePipe, public sharedService: SharedService, private dialog: MatDialog) { }




  ngOnInit(): void {
    this.apiService.getQuestion().subscribe(response => {
      this.message = response;
      console.log("data", this.message);

      this.sharedService.searchData$.subscribe(data => {

        if (data) {
          console.log("Received Search Data:", data);
          this.searchData = data;
        }

        else {
          console.log("Message not received:", data);
        }
        console.log("Display searchData:", this.searchData);
        console.log("Display message:", this.message);

      })
    })

    this.user_id = localStorage.getItem('user_id');
    console.log("User ID:", this.user_id);


  };

  deleteQuestion(questionKey: number) {
    this.apiService.deleteQuestion(questionKey).subscribe(data => {
      console.log("Deleted Key:", data);

      if (this.searchData) {
        this.searchData = this.searchData.filter(q => q.question_id !== questionKey);
      }

      if (this.message) {
        this.message = this.message.filter(q => q.question_id !== questionKey);
      }

    });

  }

  openModal() {
    this.dialog.open(EditComponent, {
      width: '450px',
      height: '500px',
      data: { message: 'Hello form parent component!' }
    });

  }

  setQuestionId(questionId: any) {
    this.sharedService.setQuestion(questionId);
  }
}
