import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  submitted = false;
  submitStatus = '';

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      this.submitStatus = 'success';
      // Handle registration logic here
    } else {
      this.submitStatus = 'error';
    }
  }
}
