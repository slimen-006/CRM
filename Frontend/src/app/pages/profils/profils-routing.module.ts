import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { ProfilCommercialComponent } from './profil-commercial/profil-commercial.component';

const routes: Routes = [
  {
    path:"profil_Admin" ,
    component:ProfilAdminComponent
  },
  {  
    path:"profil_client",
    component:ProfilClientComponent
  },
  {
    path:"profil_commercial",
    component:ProfilCommercialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilsRoutingModule { }
