import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoresComponent } from './autores/autores.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { DetalleAutorComponent } from './detalle-autor/detalle-autor.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes : Routes = [
  { path: '',
    component : AutoresComponent
  },

  {
   path : 'autores/:id',
   component : DetalleAutorComponent
  },

  { path:'**', component : NotfoundComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    DetalleAutorComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
