import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-2',
  standalone: true,
  imports: [],
  templateUrl: './component-2.component.html',
  styleUrl: './component-2.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Component2Component {}
