import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridAComponent } from './components/grid-a/grid-a.component';
import { SimpFormComponent } from './components/simp-form/simp-form.component';

const routes: Routes = [
    {
        path: 'grid-a',
        component: GridAComponent,
    },
    {
        path: 'simple-form',
        component: SimpFormComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
