import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
//data service to manage calls to server for front end to utilize
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/api/trips';

  getTrips() : Observable<Trip[]> {

    return this.http.get<Trip[]>(this.url);
  }
//get trips returns all trips
  addTrip (formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }
//addtrip returns a new trip in the collection
  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }
//gettrip by id
  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }
//update trip by id
}
