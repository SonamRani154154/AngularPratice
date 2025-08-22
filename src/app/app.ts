import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Forms } from './forms/forms';
import { GroupingForm } from "./grouping-form/grouping-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Forms, GroupingForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('newRouting');
}
