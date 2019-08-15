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
              import('../pantry/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'cellar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cellar/tab2.module').then(m => m.Tab2PageModule)
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
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
