import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratCommercialComponent } from './contrat-commercial/contrat-commercial.component';
import { ContratClientComponent } from './contrat-client/contrat-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContratTermineCommercialComponent } from './contrat-termine-commercial/contrat-termine-commercial.component';


@NgModule({
  declarations: [
    ContratCommercialComponent,
    ContratClientComponent,
    ContratTermineCommercialComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContratModule { }
