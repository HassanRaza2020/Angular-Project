import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'; // Import Shared Module
import { SignupComponent } from './unauthorized/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './unauthorized/verification/verification.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from './unauthorized/login/login.component';
import { QuestionsComponent } from './auth/questions/questions.component';
import { PostQuestionComponent } from './auth/post-question/post-question.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthModule } from "./auth/auth.module";
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './auth/edit/edit.component';
import { SnackbarComponent } from './snackbar/snackbar/snackbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LatestquestionComponent } from './unauthorized/latestquestion/latestquestion.component';
import { PostAnswersComponent } from './auth/post-answers/post-answers.component';




@NgModule({
  declarations: [
    AppComponent, SignupComponent,VerificationComponent,QuestionsComponent,PostQuestionComponent,LoginComponent,NavbarComponent,EditComponent, SnackbarComponent,LatestquestionComponent, PostAnswersComponent],
  imports: [
    BrowserModule,
    SharedModule, // Import the SharedModule so NavbarComponent is available
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
  
],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
