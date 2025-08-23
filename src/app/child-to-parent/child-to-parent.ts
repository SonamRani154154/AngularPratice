import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  imports: [],
  templateUrl: './child-to-parent.html',
  styleUrl: './child-to-parent.css'
})
export class ChildToParent {

  @Output() getUsers=new EventEmitter
users=['anil', 'sohan', 'mohan', 'peter','lakhan']

// ngOnInit(){
//   this.getUsers.emit(this.users);
// }

loadData(){
  this.getUsers.emit(this.users);
}

}
