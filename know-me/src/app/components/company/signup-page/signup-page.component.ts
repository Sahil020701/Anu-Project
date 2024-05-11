import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent{


  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {}

  email: string='';
  Cname: string='';
  password: string = '';
  onClickSignUp() {
    // Assuming you have stored user input in properties like Cname, email, and password
    const signupData = {
      name: this.Cname,
      email: this.email,
      password: this.password
    };
  
    // Make an HTTP request to your Node.js backend to check if the email already exists
    this.http.post<any>('http://localhost:8000/api/checkEmail', { email: this.email }).subscribe(
      response => {
        // Handle successful response from the server
        if (response.exists) {
          // Email already exists, show alert
          alert('An account with this email already exists');
        } else {
          // Email does not exist, create new account
          this.createAccount(signupData);
        }
      },
      error => {
        // Handle error
        console.error('Error checking email existence:', error);
      }
    );
}

private createAccount(signupData: any) {
    // Make an HTTP request to create a new account
    this.http.post<any>('http://localhost:8000/api/createAccount', signupData).subscribe(
      response => {
        // Handle successful response from the server
        console.log('Account created successfully');
        this.authService.setEmail(this.email);
        this.router.navigate(['/registration']);

      },
      error => {
        // Handle error
        console.error('Error creating account:', error);
      }
    );
}

}
