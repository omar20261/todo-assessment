import { Component, OnInit,Output,EventEmitter } from '@angular/core';
declare var swal: any;

@Component({
  selector: 'app-add-tags',
  templateUrl: './add-tags.component.html',
  styleUrls: ['./add-tags.component.css']
})
export class AddTagsComponent implements OnInit {
  item:any={};
  colors:any=['red','#393e46','#6970ff','#a24ddd','#f0d46e','#01be4b','#f49a47','#ea5660','#457b9d']
  @Output() onAddTag = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addTag(){
    if(!this.item.text){return swal('no tag name entered', 'please enter your tag name', 'error');}
    if(!this.item.text){return swal('no tag color entered ', 'please enter your tag color', 'error');}
    this.onAddTag.emit({...this.item});
    this.item={}
  }
}
