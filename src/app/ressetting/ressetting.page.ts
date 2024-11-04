import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthenticationService } from '../authentication.service'; // Import AuthenticationService
import { LoadingController } from '@ionic/angular'; // Import LoadingController

@Component({
  selector: 'app-ressetting',
  templateUrl: './ressetting.page.html',
  styleUrls: ['./ressetting.page.scss'],
})
export class RessettingPage implements OnInit {
  email: string;

  constructor(
    private route: Router,
    public authService: AuthenticationService,
    private loadingCtrl: LoadingController // Inject LoadingController
  ) {}

  ngOnInit() {}

  async resetPassword() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    try {
      await this.authService.resetPassword(this.email).then(()=>{
        console.log('Password reset email sent');
        this.route.navigate(['/login']);});

    } catch (error) {
      console.log(error);
    } finally {
      loading.dismiss(); // Dismiss loading indicator
    }
  }
}
