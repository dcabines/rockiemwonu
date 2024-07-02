import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from '../../services/authservice/login.service';
import { ToastService } from '../../services/toast/toast.service';
import * as helm from '@helm';

@Component({
  standalone: true,
  imports: [...helm.directives],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,
    private loginService: LoginService,
    private toastService: ToastService,
    private spinner: NgxSpinnerService
  ) { }

  onLogin(user: any) {
    this.loginService.loginUser(user).subscribe(
      response => {
        this.toastService.showSuccess('Login Successful');
        localStorage.setItem('token', response.token);
        this.spinner.hide();
        this.router.navigate(['/home']);
      },
      error => {
        this.spinner.hide();
        this.toastService.showError('Login Failed', 'Error');
        console.error('Login error:', error);
      }
    );
  }
}
