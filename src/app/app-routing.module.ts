import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { FlexComponent } from './components/flex/flex.component';

import { GridAComponent } from './components/grid-a/grid-a.component';
import { GridBComponent } from './components/grid-b/grid-b.component';
import { SimpFormComponent } from './components/simp-form/simp-form.component';
const routeOption: ExtraOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
}
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
    {
        path: 'flex',
        component: FlexComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
