import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { Exercice1Component } from './components/exercice1/exercice1.component';
import { Exercice2Component } from './components/exercice2/exercice2.component';
import { Exercice3Component } from './components/exercice3/exercice3.component';

const routes: Routes = [
  {
    path : "exercice1",
    component : Exercice1Component
  },
  {
    path : "exercice2",
    component : Exercice2Component
  },
  {
    path : "exercice3",
    component : Exercice3Component
  },
  {
    path : "exercice4",
    component : CvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
