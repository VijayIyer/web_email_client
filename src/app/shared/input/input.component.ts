import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label: string = '';
  @Input() control: FormControl;
  @Input() inputType: string;

  showErrors() {
    return this.control.touched && this.control.errors && this.control.dirty;
  }
}
