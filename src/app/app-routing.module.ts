import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menuelega',
    loadChildren: () => import('./menuelega/menuelega.module').then( m => m.MenuelegaPageModule)
  },
  {
    path: '',
    redirectTo: 'menuelega',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
