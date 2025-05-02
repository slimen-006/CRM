import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  

 
  { path: '', loadChildren: () => import('./contrat/contrat.module').then(m => m.ContratModule) },
  { path: 'rendez-vous', loadChildren: () => import('./rendez-vous/rendez-vous.module').then(m => m.RendezVousModule) },
  { path: 'contrat', loadChildren: () => import('./contrat/contrat.module').then(m => m.ContratModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'profils', loadChildren: () => import('./profils/profils.module').then(m => m.ProfilsModule) }, 



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
