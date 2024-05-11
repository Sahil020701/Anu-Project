import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './components/company/signup-page/signup-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/company/registration/registration.component';
import { CompanyRegistrationComponent } from './components/company/company-registration/company-registration.component';
import { ConfirmationComponent } from './components/company/confirmation/confirmation.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './components/company/login-page/login-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonalLoginComponent } from './components/personal/personal-login/personal-login.component';
import { PersonalSignupComponent } from './components/personal/personal-signup/personal-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    RegistrationComponent,
    CompanyRegistrationComponent,
    ConfirmationComponent,
    CompanyProfileComponent,
    LoginPageComponent,
    LandingPageComponent,
    DashboardComponent,
    PersonalLoginComponent,
    PersonalSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatListModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
