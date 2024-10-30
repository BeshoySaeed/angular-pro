import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from "./features/advanced-component/encabsulation/component-1/component-1.component";
import { Component2Component } from "./features/advanced-component/encabsulation/component-2/component-2.component";
import { Component3Component } from "./features/advanced-component/encabsulation/component-3/component-3.component";
import {PipeProComponent} from "./features/pipe-pro-feature/pipe-pro/pipe-pro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component1Component, Component2Component, Component3Component, PipeProComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-pro';
}
