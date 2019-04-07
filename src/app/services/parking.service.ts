import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Parking } from '../models/Parking';

@Injectable()
export class ParkingService {
  parkingUrl = 'http://localhost:3000/parkingdata';

  constructor(private http: HttpClient) { }

  getParking(): Observable<Parking[]> {
    return this.http.get<Parking[]>(this.parkingUrl);
  }
}
