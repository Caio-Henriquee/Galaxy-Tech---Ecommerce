import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { Component, NgModule } from '@angular/core';
import { SectionContentComponent } from './section/section-content/section-content.component';
import { HardwareLinkComponent } from './section/hardware-link/hardware-link.component';
import { CarregadorLinkComponent } from './section/carregador-link/carregador-link.component';
import { PerifericoLinkComponent } from './section/periferico-link/periferico-link.component';


export const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teste', component: PerifericoLinkComponent },
  
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'content', pathMatch: 'full' },
      { path: 'acessorio', component: PerifericoLinkComponent },
      { path: 'content', component: SectionContentComponent },
      { path: 'hardware', component: HardwareLinkComponent },
      {path: 'celulares', component: CarregadorLinkComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes{

}
