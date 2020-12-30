import { Directive, ElementRef, HostListener, Input, } from '@angular/core';

@Directive({
  selector: '[appHilightV2]'
})
export class HilightV2Directive {

  constructor(private el:ElementRef) { }

  @Input() defaultColor:string | undefined;

  @Input('appHilightV2') highlightColor:string | undefined;

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color:string | null){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
