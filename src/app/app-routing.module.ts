import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridAComponent } from './components/grid-a/grid-a.component';

const routes: Routes = [
    {
        path: 'grid-a',
        component: GridAComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
