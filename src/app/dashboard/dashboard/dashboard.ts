import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../auth/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private authService: Auth) { // Injeção de Dependência do authService

  }

  onLogout() {
    this.authService.logout();
    console.log('Logout acionado e token removido.')
  }
}
