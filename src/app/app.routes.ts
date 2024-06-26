import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { Component, NgModule, inject } from '@angular/core';
import { SectionContentComponent } from './section/section-content/section-content.component';
import { HardwareLinkComponent } from './section/hardware-link/hardware-link.component';
import { CarregadorLinkComponent } from './section/carregador-link/carregador-link.component';
import { PerifericoLinkComponent } from './section/periferico-link/periferico-link.component';
import { CriarProdutosComponent } from './criar-produtos/criar-produtos.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import ProdutosService from './service/produtos.service';



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
      { path: 'celulares', component: CarregadorLinkComponent},
      { path: 'criar',
        loadComponent: ()=> import('./criar-produtos/criar-produtos.component').then(m => m.CriarProdutosComponent) 
      },
      {path: 'gerenciar',
        loadComponent: ()=> import('./gerenciar-produtos/gerenciar-produtos.component').then(m => m.GerenciarProdutosComponent) 
      },

      
      {path: 'editar/:id',
        resolve:{
          produtos: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
            const produtosService =inject(ProdutosService)
            return produtosService.get(route.paramMap.get('id') as string)
          }

        } ,
        loadComponent: ()=> import('./editar-produtos/editar-produtos.component').then(m => m.EditarProdutosComponent) 
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes{

}
