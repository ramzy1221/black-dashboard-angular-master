import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable,EventEmitter  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);



  constructor( private http:HttpClient) { }
  toggleLogin(state: boolean): void {
    this.isLoggedIn.next(state);
  }

  status() {
    const localData: any = localStorage.getItem('user');
    if (!localData) {
      this.isLoggedIn.next(false);
       console.log('User not lgged in !!');
    } else {
      const userObj = JSON.parse(localData);
      const token_expires_at = new Date(userObj.token_expires_at);
      const current_date = new Date();
      if (token_expires_at > current_date) {
        this.isLoggedIn.next(true);
      } else {
        this.isLoggedIn.next(false);
         console.log('Token Expires!!');
      }
    }
    return this.isLoggedIn.asObservable();
  }

  user() {
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`,});
    return this.http.get('http://localhost:8000/api/user', {
      headers: headers,
    });
  }


 login(email:String , password:String ){
   const data={
    email:email,
    password:password

   }
  return this.http.post('http://127.0.0.1:8000/api/login',data)
}
logout(){
  const user:any=localStorage.getItem('user');
  const userObj=JSON.parse(user);
  const token=userObj.token;
  const headers= new HttpHeaders({Authorization: `Bearer ${token}`,});
  return this.http.post('http://localhost:8000/api/logout', {
    headers: headers,
  });
}
logot(){
  const allDevice:boolean=false;
  const user: any = localStorage.getItem('user');
  const userObj = JSON.parse(user);

  const token = userObj.token;
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.post('http://localhost:8000/api/logout', {allDevice:allDevice}, {headers:headers});
}


reset(token:string , password:string , password_confirmation:string){
  const data={
    token:token,
    password:password,
    password_confirmation: password_confirmation

   }
  return this.http.post('http://127.0.0.1:8000/api/reset-password',data)
}


forgot(email:string){
  const data={
    email:email,
 

   }
  return this.http.post('http://127.0.0.1:8000/api/forgot-password',data)
}



getTester(Status:String , Assignee:String ){
  let data={
   Status:Status,
   Assignee:Assignee

  }
 return this.http.post('http://127.0.0.1:8000/api/getdata',data)
}



}