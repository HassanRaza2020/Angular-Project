import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
],



})
export class AuthModule { }
