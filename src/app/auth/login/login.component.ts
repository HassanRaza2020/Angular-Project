import { Component } from '@angular/core';
import { animate,style,state, transition, trigger, animation } from '@angular/animations';
import { SharedService } from 'src/app/shared.service';
import { ApiService } from 'src/app/services/api.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
   animations: [
        trigger('fadeIn', [
          state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })), 
          state('visible', style({ opacity: 1, transform: 'translateY(0)' })), 
          transition('hidden => visible', animate('1.5s ease-in-out')) 
        ])
        
      ]
})


export class LoginComponent {
  imageAnimation: string = 'hidden';
  message:string = '';
  receivedMessage:string = '';
  userLogin = {email:"", username:""};

  constructor(private sharedService:SharedService , apiService:ApiService) { 
    setTimeout(() => {
      this.imageAnimation = 'visible';
    }, 500);


    this.sharedService.loginData.subscribe(message=>{
      console.log("Received:", message);
      this.receivedMessage = message;
    })
  }

  login(){
    
  }

  
  




}
