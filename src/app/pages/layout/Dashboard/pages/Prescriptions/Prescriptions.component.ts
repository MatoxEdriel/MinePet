import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-Prescriptions',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './Prescriptions.component.html',
  styleUrls: ['./Prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
