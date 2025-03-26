import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.scss']
})
export class EditAnswerComponent {
  subscription: Subscription;
  answerId: string = '';
  addAnswer = { answerId: '', description: '', };


  constructor(public dialogRef: MatDialogRef<EditAnswerComponent>, private sharedService: SharedService,
    private apiService: ApiService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.subscription = this.sharedService.questionId$.subscribe(answerId => {
      this.addAnswer.answerId = answerId;
      console.log("Received1:", this.addAnswer.answerId);
    })
  }

  editAnswer(): void {
    this.apiService.editAnswer(this.addAnswer).subscribe(
      (response) => {
        console.log("Updated successfully:", response);
        this.refreshComponent();
      },
      (error) => {
        console.error("Update Failed:", error);
      }
    );
  }

  closeModal() {
    this.dialogRef.close();
  }

  refreshComponent() {
    window.location.reload();
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: "Message edited successfully",
      duration: 3000
    });
  }




}
