import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated!: boolean;
  constructor(private authService : AuthServiceService,
    private router: Router,
  ) {this.isAuthenticated=false}
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated(); 
    console.log(this.isAuthenticated);

  }
  
  private subscription: Subscription = new Subscription;

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }  }

}
