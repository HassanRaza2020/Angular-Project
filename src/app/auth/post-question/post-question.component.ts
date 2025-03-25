import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/snackbar/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.scss']
})
export class PostQuestionComponent {

  categoryList: any[];
  addQuestion = { description: '', title: '', category: '', user_id: '', username: '' };
  responseMessage: string = '';
  userId: string = '';
  userName: string = '';
  message: string = 'Question posted successfully';


  constructor(private apiService: ApiService, private router: Router, private matSnackBar: MatSnackBar) {
    this.apiService.getCategory().subscribe(response => {
      this.categoryList = response;
      this.addQuestion.user_id = localStorage.getItem('user_id');
      this.addQuestion.username = localStorage.getItem('username');


    })
  }


  sentQuestionRequest(): void {

    if (this.addQuestion.category && this.addQuestion.description && this.addQuestion.title && this.addQuestion.user_id && this.addQuestion.username) {

      this.apiService.postQuestion(this.addQuestion).subscribe({
        next: (response) => {
          this.addQuestion = response;
          this.matSnackBar.openFromComponent(SnackbarComponent, {
            data: this.message,
            duration: 3000,
          });
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
