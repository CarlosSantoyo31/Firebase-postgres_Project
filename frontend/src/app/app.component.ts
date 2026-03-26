import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  template: `
    @if (authService.user$ | async; as user) {
      <nav class="main-navbar">
        <a class="navbar-brand" routerLink="/categories">Categorías</a> |
        <a class="navbar-brand" routerLink="/tasks">Tareas</a> |
        <a class="navbar-brand" routerLink="/visitors">Visitantes</a> |
       <div class="user-data-ctn">
        <img src={{user.photoURL}} class="navbar-img">
         <p class="navbar-text"> Usuario: {{user.displayName}}</p>
        <button class="navbar-btn" (click)="logout()">Cerrar Sesión</button>
       </div>
      </nav>
    }
    <router-outlet />
  `,
})
export class AppComponent {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
