import { Component,Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  template:`
    <input #input value="消息">
    <button (click)="popup.showAsComponent(input.value)">显示动态加载组件</button>
    <button (click)="popup.showAsElement(input.value)">显示自定义元素</button>
  `
})
export class AppComponent {
  constructor(injector:Injector,public popup:PopupService){
    //`PopupComponent`转换为自定义元素
    const PopupElement = createCustomElement(PopupComponent,{injector});
    //注册自定义元素到浏览器中
    customElements.define('popup-element',PopupElement);
  }
}
