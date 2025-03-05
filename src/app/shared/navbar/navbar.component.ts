import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user_id:string | null;
  username:string | null;


  constructor(public authService:AuthService){
    this.user_id = localStorage.getItem('user_id');
    this.username = localStorage.getItem('username');
    console.log(this.username);

    
  }




}
