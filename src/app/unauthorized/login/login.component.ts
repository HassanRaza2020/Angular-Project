import { Component } from '@angular/core';
import { animate, style, state, transition, trigger, animation } from '@angular/animations';
import { SharedService } from 'src/app/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/snackbar/snackbar/snackbar.component';
import { MatSnackBar } from "@angular/material/snack-bar";



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
  message: string = '';
  receivedMessage: string = '';
  userLogin = { email: "", password: "" };
  data = "Login successfully";


  constructor(private sharedService: SharedService, private apiService: ApiService, private router: Router, private snackBar: MatSnackBar) {
    setTimeout(() => {
      this.imageAnimation = 'visible';
    }, 500);


    this.sharedService.loginData.subscribe(message => {
      console.log("Received:", message);
      this.receivedMessage = message;
    })
  }


  postLogin(): void {
    this.apiService.postLogin(this.userLogin).subscribe({
      next: (response) => {
        this.userLogin = response;
        console.log("Login Done!!!");
        const token = localStorage.getItem('auth_token')
        console.log("token", token)
        this.router.navigate(['/question']);


      },


      error: (error) => {
        console.error(error);
      }
    }
    )
  }

  showBasicComponent() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: this.data,
      duration: 2000,
    });
  }





}
