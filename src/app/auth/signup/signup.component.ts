import { Component, OnInit } from '@angular/core';
import { animate,style,state, transition, trigger } from '@angular/animations';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

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
export class SignupComponent{
  imageAnimation: string = 'hidden';

  constructor(private apiService:ApiService , private router: Router) { 
    setTimeout(() => {
      this.imageAnimation = 'visible';
    }, 500);
    
  }

  user = {username:'', email:'', password:'', address:''};


  register(){
    if(!this.user.username || !this.user.email || !this.user.password || !this.user.address ){
      this.responseMessage = "All fields are required.";}

      this.apiService.postTestData(this.user).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.responseMessage = response.message;
          console.log('Form submitted', this.user);
          this.router.navigate(['/verification']);

        },
        error: (error) => {
          console.error('Error:', error);
          this.responseMessage = 'Registration failed. Please try again.';
        },
        complete: () => {
          console.log('Request completed');
        }
      });
      
     
   }


  // onSubmit():void{
  //   console.log('Form submitted', this.user);
  //   this.router.navigate(['/verification']);
  // };

  responseMessage : string ='';



   
   

  



}


