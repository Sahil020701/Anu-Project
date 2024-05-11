import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnowMeService {

  private companyDetailsSource = new BehaviorSubject({companyName: '', companyAddress: '', companyGSTNumber: ''});
  currentCompanyDetails = this.companyDetailsSource.asObservable();

  constructor() { }

  changeCompanyDetails(companyName: string, companyAddress: string, companyGSTNumber: string) {
    this.companyDetailsSource.next({companyName, companyAddress, companyGSTNumber});
    console.log("cpy data: "+this.companyDetailsSource)
  }
}
