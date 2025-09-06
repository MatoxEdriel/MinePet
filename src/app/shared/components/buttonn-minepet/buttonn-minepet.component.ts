import { Component, Input, OnInit } from '@angular/core';
import { HoverColorDirectiveDirective } from '../../directive/HoverColorDirective.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttonn-minepet',
  templateUrl: './buttonn-minepet.component.html',
  imports: [HoverColorDirectiveDirective,
    CommonModule
  ],
  standalone: true,
})
export class ButtonnMinepetComponent implements OnInit {
  @Input() variant?: 'primary' | 'secondary' | 'cancel';
  @Input() colorBg: string =  'blue';
  @Input() colorHover: string = 'sky';
  @Input() colorSaturade: string = '500';
  @Input() borderColor: string = 'blue';
  @Input() colorText: string = 'white';

  

  variantClasses: { [key: string]: string } = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
  cancel: 'bg-red-500 text-white hover:bg-red-600'
};



  constructor() { }

  ngOnInit() {
  }

}
