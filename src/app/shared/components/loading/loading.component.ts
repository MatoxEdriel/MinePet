import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule]
})
export class LoadingComponent implements OnInit {




  constructor(public readonly _loading: LoadingService) { }




  ngOnInit() {
  }









}
