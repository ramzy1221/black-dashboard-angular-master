import { Component, OnInit } from "@angular/core";
import { DataService } from '../../services/data.service';

import { Router } from '@angular/router'
import { HttpClient } from "@angular/common/http";
import { stringify } from "querystring";
import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Jirastatus } from "./jirastatus.model";




@Component({
  selector: "app-jirastatus",
  templateUrl: "jirastatus.component.html",
  styleUrls: ["jirastatus.component.scss"]
})
export class jirastatusComponent implements OnInit {

  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
 public str:any ;
 public x:any;
 public m:any;
 public headers = ["Issue","Type","Summary","Versions","Status","Assignee","Creator","Reporter","Created","DueDate"] ;
 public rows:any;
 alert:boolean=false
 jirastatu:any;
 jirastatus= new Jirastatus();


  constructor(private router:Router ,   private dataService:DataService,private service:DataService, private http:HttpClient,) {
    
  }

  ngOnInit() :void {
    
    this.getJirastatus();

    
    
}

getJirastatus(){
  this.http.get('http://127.0.0.1:8000/api/getall',).subscribe((res)=>{
   // this.str=JSON.stringify(res);
    //const userObj = JSON.parse(this.str);
    //console.log(this.jirastatu=res) ;
    return this.jirastatu=res ;

  })
  }



}