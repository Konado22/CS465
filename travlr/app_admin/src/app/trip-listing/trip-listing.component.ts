import { Component, OnInit } from '@angular/core';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { CommonModule } from '@angular/common';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [TripCardComponent, CommonModule],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService, TripCardComponent]
})

export class TripListingComponent implements OnInit{

  trips!:Trip[];
  message: string = '';

  constructor (private tripDataService:TripDataService, private router:Router, private authenticationService: AuthenticationService) {

    console.log('trip-listing-constructor');

  }
  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
  private getStuff():void {
    this.tripDataService.getTrips()
    .subscribe({
      next:(value:any) => {
        this.trips = value;
        if(value.length >0) {
          this.message = 'There are ' + value.length + ' trips available';
        }
        else {
          this.message = 'There were no trips retrieved from the database';
        }
        console.log(this.message);
      },
      error: (error:any) => {
        console.log("Error: " + error);
      }
    })
  }
  ngOnInit():void {
    this.getStuff();
    console.log('ngOnInit');
      
  }
  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }
}
