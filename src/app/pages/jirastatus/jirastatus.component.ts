import { Component, OnInit } from "@angular/core";
import { DataService } from '../../services/data.service';

import { Router } from '@angular/router'
import { HttpClient } from "@angular/common/http";
import { stringify } from "querystring";
import { analyzeAndValidateNgModules } from "@angular/compiler";




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

  constructor(private router:Router,    private dataService:DataService,private service:DataService, private http:HttpClient,) {}

  ngOnInit() {
    console.log("hello");
    this.http.get('http://127.0.0.1:8000/api/getall',).subscribe((res)=>{
     // this.str=JSON.stringify(res);
      //const userObj = JSON.parse(this.str);

      
     
     let y:any;
      y=Object.values(res);
    
     let ob:object =y[0];
     let tr:any=(Object.values(ob));
     //console.log(tr.length)

     for (var i = 0; i < tr.length; i++) {
      let x = tr[i];
      console.log(x.Id);
  }
     let x=tr[4];
     let m:any=x.Status;
    //console.log(tr[0]);
     //console.log(m);

    },    err=>{
      console.log(err);
    })

    
}}