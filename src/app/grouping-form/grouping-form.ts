import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';


@Component({
  selector: 'app-grouping-form',
  imports: [ReactiveFormsModule, ɵInternalFormsSharedModule, ],
  templateUrl: './grouping-form.html',
  styleUrl: './grouping-form.css'
})
export class GroupingForm {



 profileForm= new FormGroup({
  name:new FormControl('', [Validators.required]),
  password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  email: new FormControl('',[Validators.required,Validators.maxLength(50)]),

 })

 onSubmit(){
  console.log( this.profileForm.value.email);
 }


 get name(){
   return this.profileForm.get('name');
 }
  get password(){
     return this.profileForm.get('password');
  }
   get email(){
      return this.profileForm.get('email');}



//  setvalue(){
//   this.profileForm.setValue({
//     name: 'supriya',
//     password: '2234',
//     email: 'sup@1234'
//  })


// }


}
