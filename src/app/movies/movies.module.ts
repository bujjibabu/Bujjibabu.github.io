import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from '@angular/material';
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
