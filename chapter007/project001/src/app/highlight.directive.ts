import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public el:ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.hightlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hightlight(null);
  }

  private hightlight(color:string | null){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
