import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/models/auth-response.model';
import { Credentials } from 'src/app/models/credentials.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  deniedAccess: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials: Credentials = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };

      this.authenticationService.login(credentials).subscribe(
        (response: AuthResponse) => {
          console.log(response);
          if (response) {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['/admin']);
          }
        },
        (error: any) => {
          this.deniedAccess = true;
        }
      );
    }
  }

  onChanged() {
    this.deniedAccess = false;
  }
}
