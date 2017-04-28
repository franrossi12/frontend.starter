import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoatComponent } from './boat/boat.component'

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import {BoatListComponent} from './boat/boat-list/boat-list.component';
import {BoatStartComponent} from './boat/boat-start/boat-start.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      // {
      //   path: 'pages',
      //   loadChildren: './pages/pages.module#PagesModule'
      // },
      {
        path: 'boat',
        component: BoatStartComponent
      },
      {
        path: 'boat-list',
        component: BoatListComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
