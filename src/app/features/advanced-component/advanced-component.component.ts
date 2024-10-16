import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';
import { RememberFormComponent } from './components/remember-form/remember-form.component';

@Component({
  selector: 'app-advanced-component',
  standalone: true,
  imports: [RememberFormComponent],
  templateUrl: './advanced-component.component.html',
  styleUrls: ['./advanced-component.component.scss'],
})
export class AdvancedComponentComponent implements AfterViewInit {
  @ViewChild('wrapper', { read: ViewContainerRef }) wrapper!: ViewContainerRef;

  ngAfterViewInit() {
    const component = this.wrapper.createComponent(RememberFormComponent);
    // console.log(component.instance);
    component.instance.outputSignal.subscribe(console.log);
  }

  constructor() {}
}
