import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-field-minepet',
  templateUrl: './field-minepet.component.html',
    imports: [CommonModule, ReactiveFormsModule, MatIconModule],

  standalone: true
})
export class FieldMinepetComponent implements OnInit {

  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() icon?: string;
  @Input() type: string = 'text';
  @Input() control!: FormControl;


  @Input() borderColor: string = 'gray';
  @Input() borderSaturade: string = '300';
  @Input() focusColor: string = 'blue';
  @Input() focusSaturade: string = '500';
  @Input() textColor: string = 'gray-700';
  @Input() errorMessage?: string;
  constructor() { }

  ngOnInit() {
  }

}
