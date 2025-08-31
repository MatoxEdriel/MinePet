import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-Prescriptions',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './Prescriptions.component.html',
  styleUrls: ['./Prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {


  showModal = false;

  //Cambiar
  newPrescription = 
  {
    nombre: '',
    descripcion : '' ,
    fecha: ''

  }

  constructor() { }

  ngOnInit() {
  }


  openModal(){
    this.showModal = true;


  }

  closeModal(){
    this.showModal = false;

  }
}
