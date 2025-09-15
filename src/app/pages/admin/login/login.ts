import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.loginObj.username === 'admin' && this.loginObj.password === 'admin') {
      this.router.navigateByUrl('/products');
    } else {
      alert('Invalid credentials');
    }
  }
}
