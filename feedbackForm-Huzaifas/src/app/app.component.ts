import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FeedbackFormComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'feedbackForm-Huzaifa';
}
