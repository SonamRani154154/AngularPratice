import { Component } from '@angular/core';

@Component({
  selector: 'app-user-person',
  imports: [],
  templateUrl: './user-person.html',
  styleUrl: './user-person.css'
})
export class UserPerson {

  constructor(){
    console.log("constructor ");
  } 


  ngOnInit(){
    console.log("ngOnInit")
  }

  ngOnDestroy(){

  }

}
