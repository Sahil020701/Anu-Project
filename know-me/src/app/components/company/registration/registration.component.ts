import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private router: Router) {}
  profiles = [
    { value: 1, viewValue: 'Company/Organization' },
    { value: 2, viewValue: 'Personal' }
];

  selectedOption: any;
  selectProfile(event: any){
    this.selectedOption = event.value;
    // console.log(this.selectedOption);
  }
  onClickNext(){
    if(this.selectedOption === '1'){
      this.router.navigate(['/companyReg']); // Navigate to the '/other' route
    }
    else if(this.selectedOption === '2'){
      this.router.navigate(['/personalReg']); // Navigate to the '/other' route
    }
  }
}
