import { Routes } from '@angular/router';
import { IdNumberInputFieldComponent } from './features/directives/components/id-number-input-field/id-number-input-field.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full',
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./features/advanced-component/advanced-component.module').then(
        (m) => m.AdvancedComponentModule
      ),
  },
  {
    path: 'directive',
    component: IdNumberInputFieldComponent,
  },
];
