import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratClientComponent } from './contrat-client/contrat-client.component';
import { ContratCommercialComponent } from './contrat-commercial/contrat-commercial.component';
import { ContratTermineCommercialComponent } from './contrat-termine-commercial/contrat-termine-commercial.component';

const routes: Routes = [
  {
    path:"contrat-client",
    component:ContratClientComponent
  },
  {
    path:"contrat-commercial",
    component:ContratCommercialComponent
  },
  {
    path:"contrat-terminé",
    component:ContratTermineCommercialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
