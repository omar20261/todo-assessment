import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoItem:any={};
  constructor(public _location: Location,public route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if(params['id']){this.getItem(params['id']);}
    });
  }

  ngOnInit(): void {
    
  }

  getItem(id){
    let list:any = JSON.parse(localStorage.getItem('todolist'));
    this.todoItem = list.find((x)=>x.id==id);
  }

  updateItem(){
    let list:any = JSON.parse(localStorage.getItem('todolist'));
    let index = list.findIndex(x=>x.id==this.todoItem.id)
    list[index] = this.todoItem;
    localStorage.setItem('todolist', JSON.stringify(list) );
    this._location.back();
  }

  addItem(){
    if(!this.todoItem.title){return;}
    let list:any = JSON.parse(localStorage.getItem('todolist'));
    this.todoItem.id =Math.random().toString(36).slice(-10);
    if(list){list.push(this.todoItem);}else{list=[this.todoItem]}
    localStorage.setItem('todolist', JSON.stringify(list) );
    this._location.back();//swal('Success', '', 'success');
  }

  onAddTag(e){
    console.log('========',e);
    if(!this.todoItem.tags){this.todoItem.tags=[]}
    this.todoItem.tags.push(e);
  }

  RemoveTag(i){
    this.todoItem.tags.splice(i,1);
  }

}
