import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // constructor( private route:Route){}

  // // GoToProfile() {
  // //   this.router.navigate(['profile', { name: 'sonam Rani ' }]);
  // // }

  // ---------------------------------------
  users = [
    { id: 1, name: 'Sam', age: 25, amail: 'andjdjkis@gmail.com' },

    { id: 2, name: 'sonam', age: 25, amail: 'andjdjkis@gmail.com' },

    { id: 3, name: 'rani', age: 25, amail: 'andjdjkis@gmail.com' },

    { id: 4, name: 'riya', age: 25, amail: 'andjdjkis@gmail.com' },

    { id: 5, name: 'nam', age: 25, amail: 'andjdjkis@gmail.com' },
  ];
}
