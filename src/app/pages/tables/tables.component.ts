import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html" ,
  styleUrls: ['./tables.component.css']

})
export class TablesComponent implements OnInit {
 
  
  todo = ['aaaa', 'bbbbbb', 'cccccc', 'rrrrrrr'];

  done = ['aqwxs', 'azeryty', '85258525', 'status', 'fcb'];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    
  }
 
}