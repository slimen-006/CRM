import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path:'commercial', 
    component:CommercialComponent
   }, 
   {
    path:'client', 
    component:ClientComponent
   }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
