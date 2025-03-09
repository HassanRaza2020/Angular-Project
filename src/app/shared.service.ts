import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  
  providedIn: 'root' // Ensures only one instance exists

})

export class SharedService {
  
  private dataSource = new BehaviorSubject<string>('default data');
  private searchData = new BehaviorSubject<any>(null);


  currentData = this.dataSource.asObservable();
  loginData = this.dataSource.asObservable();
  searchData$:Observable<any> = this.searchData.asObservable();
   



  
  changeData(data: any) 
  {
    this.dataSource.next(data);
  }

  sentSearchData(data:any){
    this.searchData.next(data);
  }

 
}
