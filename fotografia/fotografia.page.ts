import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType} from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 
import { UbicacionService } from '../services/ubicacion.service';
import { Router } from '@angular/router';

const { Camera} = Plugins;
@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.page.html',
  styleUrls: ['./fotografia.page.scss'],
})
export class FotografiaPage implements OnInit {

  latitude: number; longitude: number; accuracy: number;

  photo: SafeResourceUrl; ubicacionPromise: Promise<any>

  constructor(private sanitizer: DomSanitizer, private ubicaServicejson : UbicacionService, private router: Router) {   }

   async takePicture() { 
    const image = await Camera.getPhoto({ 
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    this.ubicacionPromise = this.ubicaServicejson.getLocation();
    this.ubicacionPromise.then(res=>{
      this.latitude = res.latitude;
      this.longitude = res.longitude;
      this.accuracy = res.accuracy;
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath)); 
  }

  ngOnInit() {}

  volverAtras(){
    this.router.navigate(["/home"]);  }
}
