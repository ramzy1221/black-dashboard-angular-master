import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable,EventEmitter  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }



  getjiradcp(status:string){
    const data={
      status:status,
     }
    return this.http.post('http://127.0.0.1:8000/api/getall',status)
  }



}
