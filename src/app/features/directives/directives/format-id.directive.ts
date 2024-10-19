import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatId]',
  standalone: true,
})
export class FormatIdDirective {
  @HostBinding('style.border')
  border!: string;

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substring(0, 16);
    }
    let formatted = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      formatted.push(trimmed.substring(i, i + 4));
    }
    input.value = formatted.join(' ');

    this.border = '';
    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }
  }

  constructor() {}
}
