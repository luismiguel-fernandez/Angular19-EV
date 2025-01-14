import { Component, Input } from '@angular/core';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-vehicle-card',
  imports: [],
  templateUrl: './vehicle-card.component.html',
  styles: ``
})
export class VehicleCardComponent {
  @Input() vehicle:any;

  constructor(private garageSrvc:GarageService) {}

  addVehicleToGarage(vehicle:any) {
    this.garageSrvc.addToMyVehicles(vehicle)
  }

  isAlreadyInMyGarage(vehicle:any) {
    return this.garageSrvc.isAlreadyInMyGarage(vehicle)
  }

  removeVehicleFromGarage(vehicle:any) {
    this.garageSrvc.removeVehicleFromGarage(vehicle)
  }

}
