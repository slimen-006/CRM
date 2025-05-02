import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendezClientComponent } from './rendez-client/rendez-client.component';
import { RendezAdminComponent } from './rendez-admin/rendez-admin.component';
import { RendezCommercialComponent } from './rendez-commercial/rendez-commercial.component';

const routes: Routes = [
  {
    path:"rendez-client",
    component:RendezClientComponent
  },
  {
    path:"rendez-admin",
    component:RendezAdminComponent
  },
  {
    path:"rendez-commerical",
    component:RendezCommercialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule { }
