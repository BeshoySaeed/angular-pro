import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  TemplateRef,
} from '@angular/core';
import { RememberFormComponent } from './components/remember-form/remember-form.component';
import { FieldInpComponent } from './components/field-inp/field-inp.component';

@Component({
  selector: 'app-advanced-component',
  standalone: true,
  imports: [RememberFormComponent, FieldInpComponent],
  templateUrl: './advanced-component.component.html',
  styleUrls: ['./advanced-component.component.scss'],
})
export class AdvancedComponentComponent implements AfterViewInit {
  @ViewChild('wrapper', { read: ViewContainerRef }) wrapper!: ViewContainerRef;
  @ViewChild('contentProjection') content!: TemplateRef<any>;
  isRemember: boolean = false;
  ngAfterViewInit() {
    const fieldInpComponent = this.wrapper.createComponent(FieldInpComponent, {
      index: 0,
    });

    const rememberFormComponent = this.wrapper.createComponent(
      RememberFormComponent,
      { index: 1 }
    );
    rememberFormComponent.instance.contentTemplate = this.content;
    rememberFormComponent.instance.outputSignal.subscribe((res: boolean) => {
      this.isRemember = res;
      rememberFormComponent.instance.contentTemplate = this.content;
    });
  }

  constructor() {}
}
