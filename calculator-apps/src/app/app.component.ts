import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator-app';
   result: number = 0;

  add(a: string, b: string) {
    this.result = +a + +b;
  }

  subtract(a: string, b: string) {
    this.result = +a - +b;
  }

  multiply(a: string, b: string) {
    this.result = +a * +b;
  }

  divide(a: string, b: string) {
    const num2 = +b;
    if (num2 === 0) {
      alert("Cannot divide by zero!");
      return;
    }
    this.result = +a / num2;
  }
}
