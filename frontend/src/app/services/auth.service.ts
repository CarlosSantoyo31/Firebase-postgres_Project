import { Injectable, inject } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private auth = inject(Auth);
    user$ = user(this.auth);

    constructor(private router: Router) {}

    loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(this.auth, provider);
    }

    logout() {
        return signOut(this.auth).then(() => 
            this.router.navigate(['/login'])
        );
    }

    getCurrentUser() {
        return this.auth.currentUser;
    }
}