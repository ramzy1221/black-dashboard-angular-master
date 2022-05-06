import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SenderService } from "src/app/sender.service";
import { DataService } from 'src/app/services/data.service';
import { User } from "../tester/tester.model";

@Component({
  providers: [DataService,SenderService],
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  @Input() allData: [];
  user:any;
  
  users:any=new User();
  constructor(private router:Router ,   private dataService:DataService , private senderservice:SenderService ) {}

  ngOnInit() {


    this.dataService.user().subscribe((res)=>{
      
      let y:any;
         y=Object.values(res);
        
         this.user=y[1] ;
      console.log(y[1])

    })


  }



  

}
