import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverColorDirective]'
})
export class HoverColorDirectiveDirective {
@Input('appHoverColorDirective') hoverColor: string = 'blue';

@Input() hoverShade: number = 500;

  constructor(private el: ElementRef,
    private renderer: Renderer2
  ) { }

    @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, `hover:bg-${this.hoverColor}-${this.hoverShade}`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, `hover:bg-${this.hoverColor}-${this.hoverShade}`);
  }





}
