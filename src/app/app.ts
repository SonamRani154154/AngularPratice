import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Forms } from './forms/forms';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Header,Forms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('newRouting');
}
