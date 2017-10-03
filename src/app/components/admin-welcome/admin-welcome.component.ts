
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.scss']
})
export class AdminWelcomeComponent {
  constructor(private router: Router) {
  }
  placeOrder() {
    this.router.navigate(['/admin-details']);
  }

}
