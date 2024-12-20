import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService){
    this.signedin$ = this.authService.signedin$;
  }
  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
  }
}
