import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/cars']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  async  loginWithGoogle() {
    await  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['/cars']);
  }

  async  loginWithFacebook() {
    await  this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    this.router.navigate(['/cars']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}