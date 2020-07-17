import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';

const routes: Routes = [
  {path:'AddItem',component:AddTodoComponent},
  {path:'',component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
