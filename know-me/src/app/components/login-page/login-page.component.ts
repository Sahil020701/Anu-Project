import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private http: HttpClient, private router: Router, private authService: AuthService){}

  email: string ='';
  password: string = '';
  onClickLogin(){
    this.http.post<any>('http://localhost:8000/companyLogin', { email:this.email, password:this.password }).subscribe(
      response => {
 
        if (response.exists) {
          this.authService.setEmail(this.email);
          this.router.navigate(['/companyProfile']);
        } else {
          alert('User account not found');
        }
      },
      error => {
        // Handle errors
        console.error('Error occurred:', error);
      }
    );
  }
}
