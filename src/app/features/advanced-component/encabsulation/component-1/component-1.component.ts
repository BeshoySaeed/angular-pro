import { Component } from '@angular/core';
import { Component2Component } from "../component-2/component-2.component";

@Component({
  selector: 'app-component-1',
  standalone: true,
  imports: [Component2Component],
  templateUrl: './component-1.component.html',
  styleUrl: './component-1.component.scss'
})
export class Component1Component {

}
