import { Component, Input, OnInit } from '@angular/core';
import { SenderService } from "src/app/sender.service";
import { DataService } from "src/app/services/data.service";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  tp:string;
}
export const ROUTES: RouteInfo[] = [


{
    path: "/tester",
    title: "Tasks",
    rtlTitle: "",
    icon: "icon-chart-pie-36",
    class: "",
    tp:"1",
  },

  
  
  {
    path: "/jirastatus",
    title: "jirastatus",
    rtlTitle: "",
    icon: "icon-pin",
    class: "",
    tp:"1",
   },
  

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: "",
    tp:"1",
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: "",
    tp:"1",
  },
  
  
];

@Component({
  providers: [DataService,SenderService],

  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
