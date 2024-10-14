import { Component } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {
  showModal = false;
  email: Email;
  constructor(private authService: AuthService, private emailService: EmailService) {
    this.email = {
      subject: '',
      to: '',
      from: `${authService.username}@angular-email.com'`,
      id: '',
      html: '',
      text: ''
    }
  }
  onSubmit(email: Email) {
    // Send the email off via the email service
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    })
  }
}
