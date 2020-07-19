import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridAComponent } from './components/grid-a/grid-a.component';
import { GridBComponent } from './components/grid-b/grid-b.component';
import { SimpFormComponent } from './components/simp-form/simp-form.component';

const routes: Routes = [
    {
        path: 'grid-a',
        component: GridAComponent,
    },
    {
        path: 'grid-b',
        component: GridBComponent,
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
