import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { SenderService } from 'src/app/sender.service';
import { DataService } from 'src/app/services/data.service';
import { Jirastatus } from "../jirastatus/jirastatus.model";
import { User } from './tester.model';

@Component({
  providers: [DataService,SenderService],
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  public headers = ["Id","Type","Summary","Status","Assignee"] ;
  tester:any;
  tester2:any;
  tester3:any;
  testers= new Jirastatus();
  user:any;

  key: any = 'name';
    myItem: any;
  constructor(private router:Router ,   private dataService:DataService,private service:DataService, private http:HttpClient) {}

  ngOnInit() {
    this.getTester() ;
    //this.getData();
    
    

  
  }
  
  
    getTester(){

      this.dataService.user().subscribe((res)=>{
        
        let y:any;
         y=Object.values(res);
        let  user:any=new User();
         user.name=y[1] ;
         

    const open = "Open";
    const resolved="Resolved";
    const progress="In Progress";
    let Assignee = user.name ;
    console.log(user.name)
    this.dataService.getTester(resolved,Assignee).subscribe((res)=>{
      this.tester2=res ;
      console.log(Assignee)
      })

      this.dataService.getTester(progress,Assignee).subscribe((res)=>{
        this.tester3=res ;
        console.log(Assignee)
        })
  
    

    this.dataService.getTester(open,Assignee).subscribe((res)=>{
      this.tester=res ;
      console.log(Assignee)
      })
    })
    
    }
    



    
  




  }
