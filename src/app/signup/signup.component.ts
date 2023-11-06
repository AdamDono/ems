import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm = this.fb.group({
 
   username: ['',Validators.required],
   password:['',Validators.required],
   email: ['', [Validators.required, Validators.email]],
   phone:['',Validators.required],
 
  });
 register: FormGroup<any> | undefined;
 
   title: any;
 
   isSubmitted= false; 
   constructor (private fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
   onSubmit(): void {
 console.log('Submitted form', 
 this.registerForm.value,
 this.registerForm.invalid);
 
 
 
   }
     
 }
  