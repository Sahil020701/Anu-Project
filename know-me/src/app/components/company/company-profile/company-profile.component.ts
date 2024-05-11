import { Component } from '@angular/core';
import { KnowMeService } from 'src/app/services/know-me.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent {
  constructor(private knowme: KnowMeService, private authService: AuthService, private http: HttpClient, private router: Router){}

  companyName: string = '';
  companyAddress: string = '';
  companyGSTNumber: string = '';

  ngOnInit(): void {
    // Retrieve the logged-in user's email address from AuthService
    const userEmail = this.authService.getEmail();

    // Make an HTTP request to fetch company profile data associated with the logged-in user
    this.http.get<any>(`http://localhost:8000/api/company/${userEmail}`).subscribe(
      response => {
        // Handle successful response
        this.companyName = response.Cname;
        this.companyAddress = response.address;
        this.companyGSTNumber = response.gstNumber;
      },
      error => {
        // Handle error
        console.error('Error fetching company profile data:', error);
        // You might want to display an error message or handle the error in some way
      }
    );
  }
  onClickShow(){
    this.router.navigate(['/dashboard']);

  }
}
