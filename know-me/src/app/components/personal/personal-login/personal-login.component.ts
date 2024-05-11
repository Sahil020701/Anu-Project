import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-login',
  templateUrl: './personal-login.component.html',
  styleUrls: ['./personal-login.component.scss']
})
export class PersonalLoginComponent {
  constructor(private http: HttpClient, private router: Router, private authService: AuthService){}

  email: string = '';
  password:string='';

  onClickLogin(){
    this.http.post<any>('http://localhost:8000/personalLogin', { email:this.email, password:this.password }).subscribe(
      response => {
 
        if (response.exists) {
          this.authService.setEmail(this.email);
          // this.router.navigate(['/personalProfile']);
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
