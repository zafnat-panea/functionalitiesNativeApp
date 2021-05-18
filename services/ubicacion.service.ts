import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const {Geolocation} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  latitude : number;
  longitude : number;
  accuracy : number;
  locajson : any;

  constructor() { 
    
  }

  async getLocation(){
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.accuracy = position.coords.accuracy;
    this.locajson = {
      "latitude" : this.latitude,
      "longitude" : this.longitude,
      "accuracy" : this.accuracy
    }
    return this.locajson;
  }
}
