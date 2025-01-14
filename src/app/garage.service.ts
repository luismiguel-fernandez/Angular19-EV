import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private myVehicles:any[] = []

  constructor() {
    if ( localStorage.getItem("myVehicles") ) {
      this.myVehicles = JSON.parse( localStorage.getItem("myVehicles") || "[]" )
    }
  }

  addToMyVehicles(vehicle:any) {
    //EVITAR QUE SE INSERTE 2 VECES EL MISMO VEHÍCULO
    if ( !this.isAlreadyInMyGarage(vehicle) ) {
      this.myVehicles.push(vehicle)
      localStorage.setItem("myVehicles", JSON.stringify(this.myVehicles))
    }
  }

  getMyVehicles() {
    return this.myVehicles
  }

  isAlreadyInMyGarage(vehicle:any) {
    return this.myVehicles.find( v => v.id == vehicle.id )
  }

  removeVehicleFromGarage(vehicle:any) {
    //alternativa 1: filter
    //this.myVehicles = this.myVehicles.filter( v => v.id != vehicle.id )
    //alternativa 2: splice
    let posicion = this.myVehicles.findIndex( v => v.id == vehicle.id )
    if (posicion >= 0) {
      this.myVehicles.splice(posicion,1)
      localStorage.setItem("myVehicles", JSON.stringify(this.myVehicles))
    }
  }
}
