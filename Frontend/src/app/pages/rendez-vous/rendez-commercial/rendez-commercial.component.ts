import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RendezService } from '../service/rendez.service';
import { AuthentificationService } from 'src/app/account/auth/services/authentification.service';
import { UserService } from 'src/app/account/auth/services/user.service';

@Component({
  selector: 'app-rendez-commercial',
  templateUrl: './rendez-commercial.component.html',
  styleUrls: ['./rendez-commercial.component.scss']
})
export class RendezCommercialComponent implements OnInit {
  rendezVousList: any[] = [];
  rendezVousForm!: FormGroup;
  modalRef!: NgbModalRef;
  userId: any;  
  commercialId:any
  constructor(
    private rendezVousService: RendezService,
    private authService: AuthentificationService,
    private userService:UserService
  ) {}
  
  ngOnInit(): void {
    debugger
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      this.userId = userId;
      this.userService.findById(this.userId).subscribe({
        next:(data)=>{
            if(data.commercial !=null){
             this.commercialId=data.commercial.id;
             this.getRendezVousByCmmercial();  
            }
        }, 
        error:(error) =>{
            console.log(error.error)
        }
      
      })
      
    } else {
      console.error('Utilisateur non connecté ou ID manquant');
    }
  }

  updateStatus(rendezVousId: number, status: string): void {
    this.rendezVousService.updateStatusCommercial(rendezVousId, status).subscribe({
      next: () => {
        console.log(`Statut mis à jour en ${status}`);
        this.getRendezVousByCmmercial(); 
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du statut :', err);
      }
    });
  }
  
  getRendezVousByCmmercial() {
    this.rendezVousService.findByCommercialId(this.commercialId).subscribe({
      next: (data) => {
        this.rendezVousList = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des rendez-vous', err);
      }
    });
  }

}
