import { Component } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})


export class VerificationComponent {
  minutes:number=0;
  seconds:number=10;
  timer:any;
  otpExpired:boolean = false;
  constructor(){}
  ngOnInit():void{
    this.startTimer();
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
        else{
          clearInterval(this.timer);
          this.otpExpired=true;
          
        
        }
      }

    },1000)
  }


}
