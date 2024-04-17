import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.signout().subscribe(() => {
      // Navigate the user to the signin page
    })
  }
}
