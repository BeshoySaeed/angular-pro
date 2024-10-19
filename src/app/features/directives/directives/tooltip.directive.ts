import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  standalone: true,
  exportAs: 'tooltip',
})
export class TooltipDirective {
  toolTipElement = document.createElement('div');
  visible = false;

  @Input()
  set tooltip(value: string) {
    this.toolTipElement.textContent = value;
  }

  hide() {
    this.toolTipElement.classList.remove('tooltip-active');
  }

  show() {
    this.toolTipElement.classList.add('tooltip-active');
  }
  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log('init tooltip');
    this.toolTipElement.className = 'tooltip';
    this.el.nativeElement.appendChild(this.toolTipElement);
    this.el.nativeElement.classList.add('tooltip-container');
  }
}
