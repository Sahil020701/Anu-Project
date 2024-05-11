import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KnowMeService } from 'src/app/services/know-me.service';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit{
  companyName: string='';
  companyAddress: string='';
  companyGSTNumber: string='';

  constructor(private router: Router, private knowme: KnowMeService, private http: HttpClient,private authService: AuthService) {}

  ngOnInit() {
        this.knowme.currentCompanyDetails.subscribe(details => {
          this.companyName = details.companyName;
          this.companyAddress = details.companyAddress;
          this.companyGSTNumber = details.companyGSTNumber;
          // console.log(this.companyAddress)
        });
      }
  onClickEdit(){
    this.router.navigate(['/companyReg']); // Navigate to the '/other' route

  }

  sendCompanyDetails() {
    const userEmail = this.authService.getEmail();
    const companyData = {
      companyName: this.companyName,
      companyAddress: this.companyAddress,
      companyGSTNumber: this.companyGSTNumber,
      email: userEmail
    };

    this.http.post<any>('http://localhost:8000/company', companyData)
      .subscribe(response => {
        console.log('Company data sent successfully:', response);
        // Handle response or any additional logic here
        this.router.navigate(['/companyProfile']);
      }, error => {
        console.error('Error sending company data:', error);
        // Display an alert using Angular Material dialog
        alert("Profile with same name already exists!")
      });
  }

  onClickConfirm(){
    this.sendCompanyDetails()
  }
}
