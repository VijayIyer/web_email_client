import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router  
  ) {}
  ngOnInit() {
    this.authService.signout().subscribe(() => {
      // Navigate the user to the signin page
      this.router.navigateByUrl(`/`)
    })
  }
}
