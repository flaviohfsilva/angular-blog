import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';


const routes: Routes = [

  {
    path:'page',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule),
  },

  {path: 'home', component: HomeComponent},

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
