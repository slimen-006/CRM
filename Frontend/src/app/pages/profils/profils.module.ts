import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilsRoutingModule } from './profils-routing.module';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbCollapseModule, NgbNavModule, NgbPopoverModule, NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { ProfilCommercialComponent } from './profil-commercial/profil-commercial.component';


@NgModule({
  declarations: [
    ProfilAdminComponent,
    ProfilClientComponent,
    ProfilCommercialComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfilsRoutingModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbPopoverModule,
  ]
})
export class ProfilsModule { }
