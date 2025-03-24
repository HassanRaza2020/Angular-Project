import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from '../unauthorized/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { PostQuestionComponent } from './post-question/post-question.component';
import { EditComponent } from './edit/edit.component';
import { AnswersComponent } from './answers/answers.component';
import { PostAnswersComponent } from './post-answers/post-answers.component';


@NgModule({
  declarations: [
  
  
    AnswersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],





})
export class AuthModule { }
