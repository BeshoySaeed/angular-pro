import { Component } from '@angular/core';
import { FormatIdDirective } from '../../directives/format-id.directive';
import { TooltipDirective } from '../../directives/tooltip.directive';

@Component({
  selector: 'app-id-number-input-field',
  standalone: true,
  imports: [FormatIdDirective, TooltipDirective],
  templateUrl: './id-number-input-field.component.html',
  styleUrl: './id-number-input-field.component.scss',
})
export class IdNumberInputFieldComponent {}
