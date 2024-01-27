import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logoUrl: string = '';
  loginFailed: boolean = false; // เพิ่ม property loginFailed

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadLogo();
  }

  loadLogo() {
    const logoUrl = '../../../assets/images/logo.png';
    this.http.get(logoUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
      this.logoUrl = URL.createObjectURL(blob);
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      this.loginService.login(username, password).subscribe(
        response => {
          console.log('Login successful:', response);
          this.router.navigate(['/app-dashboard']);
        },
        error => {
          console.error('Login failed:', error);
          this.loginFailed = true;
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
