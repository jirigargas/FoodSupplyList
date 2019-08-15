import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pantry',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pantry/pantry.module').then(m => m.PantryModule)
          }
        ]
      },
      {
        path: 'cellar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cellar/cellar.module').then(m => m.CellarModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/pantry',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pantry',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
