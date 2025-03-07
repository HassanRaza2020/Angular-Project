import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  
  providedIn: 'root' // Ensures only one instance exists

})

export class SharedService {
  
  private dataSource = new BehaviorSubject<string>('default data'); 
  currentData = this.dataSource.asObservable();
  loginData = this.dataSource.asObservable();

  changeData(data: any) 
  {
    this.dataSource.next(data);
  }

  sentSerachData(data:any){
     this.dataSource.next(data);
  }


  
 
}
