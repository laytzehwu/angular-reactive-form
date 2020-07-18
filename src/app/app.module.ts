import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridAComponent } from './components/grid-a/grid-a.component';
import { SimpFormComponent } from './components/simp-form/simp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GridAComponent,
    SimpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
