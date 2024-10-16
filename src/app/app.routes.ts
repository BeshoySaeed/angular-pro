import { Routes } from '@angular/router';

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
];
