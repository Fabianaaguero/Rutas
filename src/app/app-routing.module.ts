import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'imagenes', component:ImagenesComponent},
  {path:'tabla', component:TablaComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
