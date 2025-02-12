import { Component, OnInit } from '@angular/core';
import { animate,style,state, transition, trigger } from '@angular/animations';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private apiService:ApiService) { 
    setTimeout(() => {
      this.imageAnimation = 'visible';
    }, 500);
    
  }

  user = {username:'', email:'', password:'', address:''};

  

register() {
  this.apiService.postTestData(this.user).subscribe(response => {
    alert(response.message);
  }, error => {
    console.error('Registration error:', error);
  });
}







}


