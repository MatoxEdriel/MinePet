import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,

  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [MatIconModule, RouterModule, CommonModule],
})
export class SidebarComponent implements OnInit {
menuItems = [
  { label: 'Consultas', icon: 'dashboard', route: '/dashboard/consultas' },
  { label: 'Recetas', icon: 'pets', route: '/dashboard/recetas' },
  { label: 'Historial', icon: 'build', route: '/dashboard/historial' },
  { label: 'Inventario', icon: 'settings', route: '/dashboard/configuracion' },
];


  constructor() {}

  ngOnInit() {}
}
