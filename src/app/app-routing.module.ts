import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {APP_ROUTE} from 'app/constants/app-route';

const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTE.HOME,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTE.HOME,
    loadChildren: () => import('app/flex-home/flex-home.module').then(m => m.FlexHomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
