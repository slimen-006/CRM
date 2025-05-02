import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RendezService } from '../../rendez-vous/service/rendez.service';
import { AuthentificationService } from 'src/app/account/auth/services/authentification.service';
import { UserService } from 'src/app/account/auth/services/user.service';
import { ContratService } from '../service/contrat.service';

@Component({
  selector: 'app-contrat-commercial',
  templateUrl: './contrat-commercial.component.html',
  styleUrls: ['./contrat-commercial.component.scss']
})
export class ContratCommercialComponent implements OnInit {

  contratList: any[] = [];
  contratForm!: FormGroup;
  modalRef!: NgbModalRef;
  userId: any;  
  commercialId:any
  isEditMode = false;
  currenContratId: number | null = null;
  selectedClientId!: number;
  listeClient:any
  selectedContrat:any
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private contratService: ContratService,
    private authService: AuthentificationService,
    private userService:UserService
  ) {}

  ngOnInit(): void {
    this.findAllClient();
    this.initForm();
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      this.userId = userId;
      this.userService.findById(this.userId).subscribe({
        next:(data)=>{
            if(data.commercial !=null){
             this.commercialId=data.commercial.id;
             this.getContratByComaricalId();  
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

  initForm() {
    this.contratForm = this.fb.group({
      dateDebut: [''],
      dateFin: [''],
      montant: [''],
      typeContrat: [''],
      statut: [''],
      description: [''],
      clientId: [null]  // <- ici
    });
  }

  findAllClient() {
    this.userService.findByRole('Client').subscribe({
      next: (result) => {
        this.listeClient =result ; 
      },
      error: (err) => console.error('Erreur lors de la récupération des commerciaux', err)
    });
  }
   
  
  openModal(content: any, contrat?: any) {
    this.isEditMode = !!contrat;
    if (contrat) {
      this.selectedContrat=contrat;
      this.currenContratId = contrat.id;
      this.contratForm.patchValue({
        dateDebut: contrat.dateDebut,
        dateFin: contrat.dateFin,
        montant: contrat.montant,
        typeContrat: contrat.typeContrat,
        statut: contrat.statut,
        description: contrat.description,
        clientId: contrat.client?.id || null
      });
    } else {
      this.currenContratId = null;
      this.contratForm.reset();
    }
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
  }
  

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  saveContrat() {
    const formData = this.contratForm.value;
   const clientId = formData.clientId;   
    console.log(this.selectedClientId);
    if (this.isEditMode && this.currenContratId) {
      // Mode modification
      this.contratService.update(this.currenContratId, formData).subscribe({
        next: () => {
          this.getContratByComaricalId();
          this.closeModal();
        },
        error: (error) => {
          console.error("Erreur lors de la mise à jour du rendez-vous", error);
        }
      });
    } else {
      // Mode ajout
      this.contratService.create(formData , clientId , this.commercialId).subscribe({
        next: () => {
          this.getContratByComaricalId();
          this.closeModal();
        },
        error: (error) => {
          console.error("Erreur lors de la création du rendez-vous", error);
        }
      });
    }
  }

  onDelete(rendezVousId: number): void {
    this.contratService.delete(rendezVousId).subscribe({
      next: () => {
        this.getContratByComaricalId();
      },
      error: (err) => {
        console.error('Erreur lors de la suppression', err);
      }
    });
  }
  getContratByComaricalId() {
    this.contratService.findByCommercialId(this.commercialId).subscribe({
      next: (data) => {
        this.contratList = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des contrats', err);
      }
    });
  }


  

  private formatDateForInput(date: string) {
    const d = new Date(date);
    return d.toISOString().slice(0, 16); // format 'YYYY-MM-DDTHH:mm'
  }
}
