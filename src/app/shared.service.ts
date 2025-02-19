import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private messageSource = new BehaviorSubject<string>('Default Message'); // Initial value
  currentMessage = this.messageSource.asObservable(); // Observable

  constructor() {}

  updateMessage(message: string) {
    console.log('Message Updated:', message); // Debugging log
    this.messageSource.next(message); // Update observable value
  }
}
