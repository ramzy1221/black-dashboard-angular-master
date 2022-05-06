import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from '@angular/router';
import { DataService } from '../services/data.service';
import { SenderService } from '../sender.service';

import { Router } from '@angular/router'


import { Login, User } from './login.model';


@Component({
  providers: [DataService,SenderService],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error={
    email:null
  };
  message:any;
  constructor(private router:Router,private sendeserivce:SenderService,    private dataService:DataService,private auth:DataService, private http:HttpClient,) { }
  data:any;
  userf:any;

  ngOnInit(): void {
   // this.getLogin()
  }
  onSubmit(form:NgForm){
    const email=form.value.email;
    const pass=form.value.password;
    //console.log(email, pass);
    this.auth.login(email,pass).subscribe((res)=>{
      //console.log(res);
      let vn=Object.values(res);
      let y:any;
       y=Object.values(res);
      //console.log(y[0]);
      let ob:object =y[0];
     
      let tr:any=(Object.values(ob));
      let token:any=y[1];

      //console.log(token);
      //console.log(tr[6]);
      let  user:any=new User();
      user.id=tr[0];
      user.name=tr[1];
      user.email=tr[2];
      user.email_verified_at=tr[3];
      user.created_at=tr[4];
      user.updated_at=tr[5];
      user.type=tr[6];
      user.token=token;
      //console.log(user);
      //console.log(user1);
      //let x=Object.values(res);
      //user1 = res ;
      //console.log(user1);
      //console.log(Object.keys(res));
      //this.sendeserivce.update("user");
      localStorage.setItem('user', JSON.stringify(res))

   
      this.router.navigate(["/tester"])


      


    },
    err=>{
      console.log(err);
    })

  }


 // getLogin(){
    //this.dataService.getLogin().subscribe(res=>{
     // return this.login=res;
   // })
  // }



}