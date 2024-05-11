// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './components/company/signup-page/signup-page.component';
import { RegistrationComponent } from './components/company/registration/registration.component';
import { CompanyRegistrationComponent } from './components/company/company-registration/company-registration.component';
import { ConfirmationComponent } from './components/company/confirmation/confirmation.component';
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/company/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonalSignupComponent } from './components/personal/personal-signup/personal-signup.component';
import { PersonalLoginComponent } from './components/personal/personal-login/personal-login.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'companyReg', component: CompanyRegistrationComponent },
  { path: 'confirmation', component: ConfirmationComponent},
  { path: 'companyProfile', component: CompanyProfileComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'personalSignup', component: PersonalSignupComponent},
  { path: 'personalLogin', component: PersonalLoginComponent},

  { path: '', redirectTo: '', pathMatch: 'full' } // Redirect to main component by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
