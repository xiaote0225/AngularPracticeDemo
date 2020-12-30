import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private hasView = false;


  constructor(
    private tempalteRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ) { }

  @Input()
  set appUnless(condition:boolean){
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.tempalteRef);
      this.hasView = true;
    }else{
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
