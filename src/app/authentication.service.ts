import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public ngFireAuth: AngularFireAuth) {}

  async registerUser(email: string, password: string) {
    try {
      return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Registration Error:', error);
      throw error;
    }
  }

  async loginUser(email: string, password: string) {
    try {
      return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  }

  async resetPassword(email: string) {
    try {
      return await this.ngFireAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.error('Password Reset Error:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      return await this.ngFireAuth.signOut();
    } catch (error) {
      console.error('Sign Out Error:', error);
      throw error;
    }
  }

  async getProfile() {
    try {
      return await this.ngFireAuth.currentUser;
    } catch (error) {
      console.error('Get Profile Error:', error);
      throw error;
    }
  }
}
