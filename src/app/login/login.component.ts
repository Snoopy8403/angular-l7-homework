import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = signal<string>('');
  
  constructor(
    private readonly authService: AuthService
  ){ }

  public login() {
    this.authService.login({username: this.username()});
  }
}
