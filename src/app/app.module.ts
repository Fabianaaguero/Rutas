import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { NavComponent } from './componentes/nav/nav.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablaComponent,
    NavComponent,
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
