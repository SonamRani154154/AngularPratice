import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Forms } from './forms/forms';
import { GroupingForm } from "./grouping-form/grouping-form";
import { TemplateForm } from "./template-form/template-form";
import { People } from "./people/people";
import { Child } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Forms, GroupingForm, TemplateForm, People, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('newRouting');



userName ="Sonam"


 onUserChange(user:string){
  this.userName = user;
 }

}
