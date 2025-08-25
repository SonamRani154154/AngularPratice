import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Forms } from './forms/forms';
import { GroupingForm } from "./grouping-form/grouping-form";
import { TemplateForm } from "./template-form/template-form";
import { People } from "./people/people";
import { Child } from "./child/child";
import { ChildToParent } from "./child-to-parent/child-to-parent";
import { CommonModule } from '@angular/common';
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';
import { UserPerson } from "./user-person/user-person";
import { Product } from './services/product';
import { Data } from './services/data';
import { User } from './user/user';
import { datatypes } from './interfaces/User';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Forms, GroupingForm, TemplateForm, People, Child, ChildToParent, CommonModule, CurrencyConvertorPipe, UserPerson, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('newRouting');



// userName ="Sonam"


//  onUserChange(user:string){
//   this.userName = user;
//  }



// users=['Anil', 'Sunil', 'Kiran', 'Ravi']


// users:undefined|string[];


// handleUsers(users:string[]){
// console.log(users);
// this.users=users;
  
// // }


// ------------------------------------------------------------------------------------

// title="code step by step ";
// name="sonam "
// date =new Date();
// amount=10;

// ---------------------service ---------------------------------
//  productData:{
//   name:string;
//   branch:string;
//   price:string;
//  }[]|undefined

// constructor(private productService: Product)
// {}

// getProductData(){
//  this.productData=this.productService.getProductData()
// }

// -------------------------------- call api with services -------------------------

users:datatypes[]=[];
selecteduser:datatypes|undefined
constructor(  private DataService:Data){

}

ngOnInit(){
this.getuser()

}


getuser(){
this.DataService.getUsers().subscribe((data:datatypes[])=>{

this.users=data;
console.log(this.users);

})

}

addUser(user:datatypes){
  if(!this.selecteduser){

this.DataService.saveUsers(user).subscribe((data:datatypes)=>{
  if(data){
    this.getuser();
  }
})
  }
  else{
    const userData={...user,id:this.selecteduser.id}
    this.DataService.UpdateUser(user).subscribe((data)=>{
      if(data){
        this.getuser()
      }
    })
  }




}

deleteUser(id:string){
this.DataService.deleteUser(id).subscribe((data:datatypes)=>{
    if(data){
    this.getuser();
  }
})

}

SelectUpdateUser(id:string){
this.DataService.getSelectedUser(id).subscribe((data:datatypes)=>{
    this.selecteduser=data
})
}

}
