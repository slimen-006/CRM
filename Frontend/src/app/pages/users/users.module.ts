import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommercialComponent } from './commercial/commercial.component';
import { ClientComponent } from './client/client.component';


   
@NgModule({
  declarations: [
    CommercialComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    NgbDropdownModule,
  ]
})
export class UsersModule { }
