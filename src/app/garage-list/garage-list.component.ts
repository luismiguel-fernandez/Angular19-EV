import { Component } from '@angular/core';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-garage-list',
  imports: [VehicleCardComponent],
  templateUrl: './garage-list.component.html',
  styles: ``
})
export class GarageListComponent {
  constructor(private GarageSrvc:GarageService) {}

  getMyVehicles() {
    return this.GarageSrvc.getMyVehicles()
  }
}
