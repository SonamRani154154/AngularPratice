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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Forms, GroupingForm, TemplateForm, People, Child, ChildToParent,CommonModule  , CurrencyConvertorPipe],
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

title="code step by step ";
name="sonam "
date =new Date();
amount=10;

}
