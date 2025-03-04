import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'; // Import Shared Module
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './auth/verification/verification.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { QuestionsComponent } from './auth/questions/questions.component';
import { PostQuestionComponent } from './auth/post-question/post-question.component';



@NgModule({
  declarations: [
    AppComponent, SignupComponent,VerificationComponent,QuestionsComponent,PostQuestionComponent,LoginComponent],
  imports: [
    BrowserModule,
    SharedModule,  // Import the SharedModule so NavbarComponent is available
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
