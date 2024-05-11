import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userEmail: string='';

  constructor() { }

  setEmail(email: string) {
    this.userEmail = email;
  }

  getEmail(): string {
    return this.userEmail;
  }

  // Other authentication-related methods could be added here
}
