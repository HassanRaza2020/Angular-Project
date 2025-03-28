import { Component, OnInit } from '@angular/core';
import { animate,style,state, transition, trigger, query } from '@angular/animations';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/snackbar/snackbar/snackbar.component';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
   animations: [
      trigger('fadeIn', [
        state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })), 
        state('visible', style({ opacity: 1, transform: 'translateY(0)' })), 
        transition('hidden => visible', animate('1.5s ease-in-out')) 
      ])
      
    ]

  
      
})
export class SignupComponent {
  imageAnimation: string = 'hidden';
  
  constructor(private apiService:ApiService , private router: Router, private sharedService:SharedService, private snackBar:MatSnackBar) { 
    setTimeout(() => {
      this.imageAnimation = 'visible';
    }, 500);
    
  }

  user = 
         {
          username:'', 
          email:'',
          password:'', 
          address:''};

  register(){
    if(!this.user.username || !this.user.email || !this.user.password || !this.user.address ){
      this.responseMessage = "All fields are required.";}

      this.apiService.postSignUp(this.user).subscribe({
        next: (response) => {
          // console.log('Success:', response);
          this.responseMessage = response.message;
          console.log('Form submitted', this.user);
          this.sendMessage();
         

        },
        error: (error) => {
          console.error('Error:', error);
          this.responseMessage = 'Registration failed. Please try again.';
          this.showBasicComponent(error);
        },
        complete:() => {
          console.log('Request completed');
        }
      } );
      
     
   }

   sendMessage() {
    console.log('Sending:', this.user); // Debugging log
    this.sharedService.changeData(this.user);
    this.router.navigate(['/verification'])
  }

  
  responseMessage : string ='';


  showBasicComponent(error: any) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: error.message,       
      duration: 2000,
    });
    console.error("Snackbar Error:", error); // Log separately
  }
  






}


