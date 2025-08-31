import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  styleUrls: ['./layout.component.css'],
  imports: [
    SidebarComponent,
    NavComponent,
  RouterOutlet
]
})
export class LayoutComponent implements OnInit {

  isSidebarOpen: boolean = true;


  toggleSideBar(){
    this.isSidebarOpen = !this.isSidebarOpen;
  }


  constructor() { }

  ngOnInit() {
  }

}
