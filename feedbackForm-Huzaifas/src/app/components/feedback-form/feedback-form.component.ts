import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-feedback-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {
  submitted = false;

  feedbackForm = new FormGroup(
    {
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      subject: new FormControl('',[Validators.required,Validators.maxLength(40)]),
      comments : new FormControl('',[Validators.required,Validators.maxLength(350)])


    }
  )

  get f() {
    return this.feedbackForm.controls;
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted:', this.feedbackForm.value);
      this.submitted = true;

      this.feedbackForm.reset();
    } else {
      this.feedbackForm.markAllAsTouched(); 
    }

}

}
