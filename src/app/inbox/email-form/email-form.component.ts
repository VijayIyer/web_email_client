import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  @Input() email: Email;
  @Output() emailSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    const { to, from, subject, text} = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.email, Validators.required]),
      from: new FormControl({value: from, disabled:true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    })
  }

  onSubmit() {
    console.log(`inside onsubmit function`)
    if(this.emailForm.invalid){
      console.log(`this email is invalid!`);
      return;
    }
    this.emailSubmit.emit(this.emailForm.value)
  }
}
