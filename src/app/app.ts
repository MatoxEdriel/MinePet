import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoadingComponent } from './shared/components/loading/loading.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  protected readonly title = signal('MinePet');


    constructor() {}


     ngOnInit(): void {
 
  }

}
