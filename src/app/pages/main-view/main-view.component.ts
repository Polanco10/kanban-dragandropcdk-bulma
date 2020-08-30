import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model'
import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  board:Board = new Board('Test',[
    new Column('Ideas',["Some random Idea", "Another Task"]),
    new Column('Research',["Some random Idea", "Another Task"]),
    new Column('Todo',["Some random Idea", "Another Task"]),
    new Column('Todo',["Some random Idea", "Another Task"])

  ])
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.board)
  }

}
