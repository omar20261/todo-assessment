import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
declare var swal: any;
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

  getList(){
    return JSON.parse(localStorage.getItem('todolist'));
  }

  saveList(list){
    localStorage.setItem('todolist', JSON.stringify(list) );
  }

  getItem(id){
    let list:any = this.getList();
    this.todoItem = list.find((x)=>x.id==id);
  }

  updateItem(){
    let list:any = this.getList();;
    let index = list.findIndex(x=>x.id==this.todoItem.id)
    list[index] = this.todoItem;
    this.saveList(list);
    swal('Success', '', 'success');
    this._location.back();
  }

  addItem(){
    if(!this.todoItem.title){return swal('no title entered', 'please enter the todo title', 'error');;}
    let list:any = this.getList();
    this.todoItem.id =Math.random().toString(36).slice(-10);
    if(list){list.push(this.todoItem);}else{list=[this.todoItem]}
    this.saveList(list);
    this._location.back();swal('Success', '', 'success');
  }

  removeItem(id){
    swal({
      title: 'Do you wnat to delete this Item ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it' }).then(()=>{
        let list:any = this.getList();
        let index = list.findIndex(x=>x.id==this.todoItem.id)
        list.splice(index,1);
        this.saveList(list);
        swal('Success', '', 'success');
        this._location.back();
      })
  }

  onAddTag(e){
    if(!this.todoItem.tags){this.todoItem.tags=[]}
    this.todoItem.tags.push(e);
  }

  RemoveTag(i){
    this.todoItem.tags.splice(i,1);
  }

}
