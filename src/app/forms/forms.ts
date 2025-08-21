import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {

name=new FormControl('sonam');
password = new FormControl('123');


displayValue(){
  console.log(this.name.value, this.password.value);
}
}
