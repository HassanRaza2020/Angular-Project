import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})


export class VerificationComponent implements OnInit {
  minutes:number=0;
  seconds:number=10;
  timer:any;
  otpExpired:boolean = false;
  message: string = '';
  receivedMessage:string = '';


  constructor(private apiService:ApiService, private router:Router, private route:ActivatedRoute, private sharedService:SharedService){}
  ngOnInit():void{
  this.startTimer();


  this.sharedService.currentData.subscribe(message=>{
    console.log("Received:", message);
    this.receivedMessage = message;
  })
 
 
  
  // this.route.queryParams.subscribe(params => {
  //   if (params['requestData']) {
  //     const userData = JSON.parse(params['requestData']);
  //     console.log('Received Data:', userData);
  //   }});



}



  startTimer(){
    this.timer = setInterval(()=>{
      if(this.seconds>0){
         this.seconds--;
      }
      
      else{
        if(this.minutes>0){
         this.minutes--;
         this.seconds = 59; 
        }
        
        else
        {
          clearInterval(this.timer);
          this.otpExpired=true;
        }
      }

    },1000)
  }


responseMessage : string ='';
otp:string = '';


  sendVerification()
  
  {

  
    if(!this.otp ){
      this.responseMessage = "OTP field is required.";}

      this.apiService.postVerificationData(this.otp, this.receivedMessage).subscribe({
          next: (response) => {
          console.log('Success:', response);
          this.responseMessage = "otp matched successfully";
          console.log('OTP sent', this.otp,this.responseMessage);

          this.sharedService.changeData(response);
          this.router.navigate(['/login']);

        },
        error: (error) => {
          console.error('Error:', error);
          this.responseMessage = 'otp failed. Please try again.';
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    
      
     
   }







}
