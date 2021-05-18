import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  items = [0,1,2,3,4,5];

  constructor(private location: Location,public toastController: ToastController) { }

  ngOnInit() {
  }

  volverAtras(){
    this.location.back();
  }

  async abrirToast(){
    const toast = await this.toastController.create({
      message: 'En construcción',
      position: 'middle',
      color: 'dark',
      duration: 3000
    });
    toast.present();
  }
}
