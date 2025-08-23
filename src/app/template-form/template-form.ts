import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrls: ['./template-form.css']
})
export class TemplateForm {
  userDetails: any;

  AddDetails(val: NgForm) {
    console.log(val);
    this.userDetails = val;
  }
}
