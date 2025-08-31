import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [SidebarComponent]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
