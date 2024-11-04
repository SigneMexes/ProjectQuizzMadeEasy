import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthenticationService } from '../authentication.service';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public route: Router,
    public authService: AuthenticationService
  ) {}

  async logOut() {
    try {
      await this.authService.signOut();
      this.route.navigate(['/landing']);  
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}

