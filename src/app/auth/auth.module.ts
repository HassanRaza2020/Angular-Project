import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';



@NgModule({
  declarations: [
    LoginComponent,
    VerificationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
]
})
export class AuthModule { }
