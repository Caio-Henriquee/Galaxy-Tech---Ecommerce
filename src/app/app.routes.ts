import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  {path : 'registro', component: RegistroComponent},
  {path: '', component:LoginComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [],
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutes{

}
