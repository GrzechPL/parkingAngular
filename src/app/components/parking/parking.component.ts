import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
import { Parking } from '../../models/Parking';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  parking: Parking[];
  data: Date;

  constructor(private parkingService: ParkingService) { }

  ngOnInit() {
    this.parkingService.getParking().subscribe(parking => {
      this.parking = parking;
      this.data = new Date;
    });
  }
  refreshEvent(e) {
    this.ngOnInit();
  }
}
