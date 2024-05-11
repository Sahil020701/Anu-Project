// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { PersonalRegistrationComponent } from './components/personal-registration/personal-registration.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'companyReg', component: CompanyRegistrationComponent },
  { path: 'personalReg', component: PersonalRegistrationComponent },
  { path: 'confirmation', component: ConfirmationComponent},
  { path: 'companyProfile', component: CompanyProfileComponent},
  { path: 'login', component: LoginPageComponent},

  { path: '', redirectTo: '', pathMatch: 'full' } // Redirect to main component by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
