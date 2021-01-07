import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  defaultColor = 'rgb(211,211,211)'; //默认颜色是浅灰

  @Input('highlight') bgColor:string | undefined;

  constructor(private el: ElementRef) { 
    el.nativeElement.style.customProperty = true;
  }

  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }

}
