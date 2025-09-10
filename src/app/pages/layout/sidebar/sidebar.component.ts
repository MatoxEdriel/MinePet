import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { IMenuItem } from '../../../interfaces/IUser.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,

  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [MatIconModule, RouterModule, CommonModule],
})
export class SidebarComponent implements OnInit {


menuItems: IMenuItem[] = [
  { label: 'Consultas', icon: 'dashboard', route: 'consultas' },
  { label: 'Recetas', icon: 'pets', route: 'recetas' },
  { label: 'Historial', icon: 'build', route: 'historial' },
  { label: 'Inventario', icon: 'settings', route: 'configuracion' },
]


  constructor() {}

  ngOnInit() {}
}
