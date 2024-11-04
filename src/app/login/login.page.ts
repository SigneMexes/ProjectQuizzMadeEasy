import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    private router: Router // Inject Router here
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"),
        ],
      ],
    });
  }

  get errorControl() {
    return this.loginForm?.controls;
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.loginForm?.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      try {
        const user = await this.authService.loginUser(email,password);
        if (user) {
          console.log('User logged in:', user);
          this.router.navigate(['/home']);  // Navigate to home upon successful login
        }
      } catch (error) {
        console.error('Login error:', error);
      } finally {
        loading.dismiss();
      }
    } else {
      loading.dismiss();
    }
  }
}
