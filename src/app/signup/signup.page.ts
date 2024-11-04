import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    public router: Router  // Inject Router
  ) {}

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
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
    return this.regForm?.controls;
  }

  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.regForm?.valid) {
      const email = this.regForm.get('email')?.value;
      const password = this.regForm.get('password')?.value;
      try {
        const user = await this.authService.registerUser(email, password);
        if (user) {
          console.log('User registered:', user);
          this.router.navigate(['/home']);  // Navigate to home or another page upon successful signup
        }
      } catch (error) {
        console.error('Registration error:', error);
      } finally {
        loading.dismiss();
      }
    } else {
      loading.dismiss();
    }
  }
}
