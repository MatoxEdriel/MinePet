import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickScale]'
})
export class ClickScaleDirective {
  @Input() scale: number = 1.05; 
  @Input() duration: number = 150; 

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', `transform ${this.duration}ms`);
  }

  @HostListener('mousedown') onMouseDown() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${this.scale})`);
  }

  @HostListener('mouseup') onMouseUp() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}