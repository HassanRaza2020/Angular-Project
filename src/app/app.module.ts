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


@NgModule({
  declarations: [
    AppComponent, SignupComponent,VerificationComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,  // Import the SharedModule so NavbarComponent is available
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
