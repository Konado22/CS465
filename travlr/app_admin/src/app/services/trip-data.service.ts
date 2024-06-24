import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { Trip } from '../models/trip';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
//data service to manage calls to server for front end to utilize
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/api/';
  tripUrl =`${this.baseUrl}trips/`;


  getTrips() : Observable<Trip[]> {

    return this.http.get<Trip[]>(this.tripUrl);
  }
//get trips returns all trips
  addTrip (formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.tripUrl, formData);
  }
//addtrip returns a new trip in the collection
  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripUrl + '/' + tripCode);
  }
//gettrip by id
  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.tripUrl + '/' + formData.code, formData);
  }
  private handleError(error:any) : Promise<AuthResponse> {
    console.error("somethinghasgonewrong");
    return Promise.reject(error.message || error);
  }
  login(user: User): Promise<AuthResponse> {
    return this.makeAuthAPICall('login', user);
  }

  // Call to our /register endpoint, creates user and returns JWT
  register(user: User): Promise<AuthResponse> {
    return this.makeAuthAPICall('register', user);
  }

  // Helper method to process both login and register methods
  private makeAuthAPICall(urlPath: string, user:User): Promise<AuthResponse>  {
    const url: string = `${this.baseUrl}/${urlPath}`;
    return this.http.post(url,user).toPromise().then(res => res as AuthResponse).catch(this.handleError);
    
  }
}
