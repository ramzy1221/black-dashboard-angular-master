import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SenderService {
  private messagesource=new Subject<string>();
  messagesource$=this.messagesource.asObservable();
  constructor() {}

   update(data:any) {
    this.messagesource.next(data);
   }

   
}
