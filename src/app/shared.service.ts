import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  
  providedIn: 'root' // Ensures only one instance exists

})

export class SharedService {
  
  private dataSource = new BehaviorSubject<string>('default data');
  private searchData = new BehaviorSubject<any>(null);
  private questionId = new BehaviorSubject<any>(null);
  private questionDetailsSource = new BehaviorSubject<any>(null);

  

  currentData = this.dataSource.asObservable();
  loginData = this.dataSource.asObservable();
  searchData$:Observable<any> = this.searchData.asObservable();
  questionId$:Observable<any> = this.questionId.asObservable(); 
  sharedQuestionDetails$ = this.questionDetailsSource.asObservable();

 
  changeData(data: any) 
  {
    this.dataSource.next(data);
  }

  sentSearchData(data:any){
    this.searchData.next(data);
  }

  setQuestion(questionId:any){
   this.questionId.next(questionId);
  }  
  
  getQuestion():any|null{
    return this.questionId.getValue();
   }

   updateQuestionDetails(questionData: any) {
    this.questionDetailsSource.next(questionData);
  }
  



 
}
