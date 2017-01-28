import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CradsComponent } from './crads/crads.component';

const routes: Routes = [
  {
    path: 'card',
    component: CradsComponent
  },
  {
    path: 'movies',
    loadChildren: 'app/movies/movies.module#MoviesModule',
  },
  {
    path: '**',
    redirectTo: 'card'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
