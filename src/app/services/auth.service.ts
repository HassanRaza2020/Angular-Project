import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   isLoggedIn():boolean
  { 
   return localStorage.getItem('auth_token') !==null;
  }

  getUserId():string | null{
    return localStorage.getItem('user_id');
  }

  getUserName():string | null{
    return localStorage.getItem('username');
  }

  

  logout(){
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.href = '/login';
  }
  




}




