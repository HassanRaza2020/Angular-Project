import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })), 
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })), 
      transition('hidden => visible', animate('1.5s ease-in-out')) 
    ])
    
  ]
})
export class HomeComponent {
  imageAnimation = 'hidden';  // Animation state for image
  quoteAnimation = 'hidden';  // Animation state for quote
  usersHereAnimation = 'hidden'; 

  ngOnInit() {
    setTimeout(() => {
      this.imageAnimation = 'visible'; // Image appears after 500ms
    }, 500);

    setTimeout(() => {
      this.quoteAnimation = 'visible'; // Quote appears after 1500ms
    }, 1000);

    
    setTimeout(() => {
      this.usersHereAnimation = 'visible'; // Quote appears after 1500ms
    }, 1000);

    this.startCounter();

  }

  count: number=0;
  target:number=1000;
  duration:number=2000;

  startCounter(){
  
    let stepTime = Math.abs(Math.floor(this.duration/this.target));
    let interval = setInterval(()=>{
  
    
    if (this.count < this.target){
        this.count+=1;}
    else
    { 
      clearInterval(interval);}
    },

    stepTime)}

 

}
