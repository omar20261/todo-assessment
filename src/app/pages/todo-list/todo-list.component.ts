import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoItems:any=[]
  constructor() {
    this.todoItems = JSON.parse(localStorage.getItem('todolist'));
  }

  ngOnInit(): void {
  }

}
