import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) {}

  
  postSignUp(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData, {
      headers: { 'Content-Type': 'application/json' },
    }).pipe(
      tap((response) => {
        console.log('Success:', response);
      }),
      catchError(this.handleError)  //catch the error here 
    );
  } 

  getTestData(): Observable<any> {
      return this.http.get(`${this.apiUrl}/test`);
  }

  
   
  postVerification(otp:any, data:any):Observable<any>{
    const payload = {otp:otp, data:data,};

    return this.http.post(`${this.apiUrl}/verification`, payload, {
      headers:{'Content-Type':`application/json`}
    })
  }

  postQuestion(data:any):Observable<any>{
    const payload = {data:data,};
    return this.http.post(`${this.apiUrl}/post-question`, payload, {
      headers:{'Content-Type':`application/json`}
    })
  }

  getQuestion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/question`);
  }

  getLatestQuestion(): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest-question`);
  }

  getCategory():Observable<any>{
    return this.http.get(`${this.apiUrl}/category`);
  }


  private handleError(error:HttpErrorResponse){
    if(error.status==422){
      return throwError(error.error);
    }
    else{
      return throwError({message:"Something went wrong, try again later"});
    }
  };
  

  postLogin(data:any):Observable<any>{
   
    return this.http.post(`${this.apiUrl}/login`, data, {withCredentials:true}).pipe(
      tap((response)=>{

    if(response.token){

    console.log("login data:", response);
        
    localStorage.setItem('auth_token', response.token);
    localStorage.setItem('user_id', response.user_id);
    localStorage.setItem('username', response.username);
    localStorage.setItem('email', response.email);
  
  } 

      })
    );
  }

    getSearch(query:string):Observable<any>{
    console.log("Data:", query);
    return this.http.get(`${this.apiUrl}/search-questions`, {
      params:{query}
    });
  }
   
  deleteQuestion(questionKey: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-question/${questionKey}`);
  }

 
  editQuestion(data:any):Observable<any>{

    console.log("Data sent:", data);
    return this.http.put(`${this.apiUrl}/edit-question`, data );

  }
  

}
