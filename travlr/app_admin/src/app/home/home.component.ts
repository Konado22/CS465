import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports:[CommonModule]
})
export class HomeComponent {

constructor (private authService:AuthenticationService) {}

ngOnInit() {}

public isLoggedIn () : boolean {
  return this.authService.isLoggedIn();
}

}
