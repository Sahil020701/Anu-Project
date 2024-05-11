import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KnowMeService } from 'src/app/services/know-me.service';
import { OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';



@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent implements OnInit{
  constructor(private router: Router, private knowme: KnowMeService) {}

  companyName: string = '';
  companyAddress: string = '';
  companyGSTNumber: string = '';

  ngOnInit() {
    this.knowme.currentCompanyDetails.subscribe(details => {
      this.companyName = details.companyName;
      this.companyAddress = details.companyAddress;
      this.companyGSTNumber = details.companyGSTNumber;
      // console.log(this.companyAddress)
    });
  }
  
  onClickNext(){
    this.knowme.changeCompanyDetails(this.companyName, this.companyAddress, this.companyGSTNumber);
    this.router.navigate(['/confirmation']); // Navigate to the '/other' route

  }
}

// import { DataService } from '../data.service'; // adjust the path as needed

// export class CompanyRegistrationComponent {
//   constructor(private router: Router, private data: DataService) {}

//   companyName: string = '';
//   companyAddress: string = '';
//   companyGSTNumber: string = '';

//   onClickNext(){
//     this.data.changeCompanyDetails(this.companyName, this.companyAddress, this.companyGSTNumber);
//     this.router.navigate(['/confirmation']);
//   }
// }

