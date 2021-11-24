import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todo: string[];
  public inputData: string;

  constructor() { 
    this.todo = [];
    this.inputData = '';
  }

  ngOnInit(): void {
  }

  add(){
    this.todo.push(this.inputData)
  }

  delete(index : number){
    this.todo.splice(index, 1);
  }

}
