import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log("User is authenticated");
      return true;
    } 
    else {
      console.log("User is not authenticated");
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}

