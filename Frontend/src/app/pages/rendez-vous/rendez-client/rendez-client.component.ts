import { UserService } from './../../../account/auth/services/user.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RendezService } from '../service/rendez.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationService } from 'src/app/account/auth/services/authentification.service';

@Component({
  selector: 'app-rendez-client',
  templateUrl: './rendez-client.component.html',
  styleUrls: ['./rendez-client.component.scss']
})
export class RendezClientComponent implements OnInit {

  rendezVousList: any[] = [];
  rendezVousForm!: FormGroup;
  modalRef!: NgbModalRef;
  userId: any;  
  clientId:any
  isEditMode = false;
  currentRendezVousId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private rendezVousService: RendezService,
    private authService: AuthentificationService,
    private userService:UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      this.userId = userId;
      this.userService.findById(this.userId).subscribe
      ({
        next:(data)=>{
            if(data.client !=null){
             this.clientId=data.client.id;
             this.getRendezVousByClientId();
            }
        }})
      
    } else {
      console.error('Utilisateur non connecté ou ID manquant');
    }
  }

  initForm() {
    this.rendezVousForm = this.fb.group({
      dateHeure: ['', Validators.required],
      lieu: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  
  openModal(content: any, rendezVous?: any) {
    this.isEditMode = !!rendezVous;
    if (rendezVous) {
      this.currentRendezVousId = rendezVous.id;
      this.rendezVousForm.patchValue({
        dateHeure: this.formatDateForInput(rendezVous.dateHeure),
        lieu: rendezVous.lieu,
        description: rendezVous.description,
      });
    } else {
      this.currentRendezVousId = null;
      this.rendezVousForm.reset();
    }
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  saveRendezVous() {
    if (this.rendezVousForm.invalid) {
      return;
    }

    const formData = {
      ...this.rendezVousForm.value,
      status: '0' // statut par défaut
    };

    if (this.isEditMode && this.currentRendezVousId) {
      // Mode modification
      this.rendezVousService.update(this.currentRendezVousId, formData).subscribe({
        next: () => {
          this.getRendezVousByClientId();
          this.closeModal();
        },
        error: (error) => {
          console.error("Erreur lors de la mise à jour du rendez-vous", error);
        }
      });
    } else {
      // Mode ajout
      this.rendezVousService.create(formData , this.clientId).subscribe({
        next: () => {
          this.getRendezVousByClientId();
          this.closeModal();
        },
        error: (error) => {
          console.error("Erreur lors de la création du rendez-vous", error);
        }
      });
    }
  }

  onDelete(rendezVousId: number): void {
    this.rendezVousService.delete(rendezVousId).subscribe({
      next: () => {
        this.getRendezVousByClientId();
      },
      error: (err) => {
        console.error('Erreur lors de la suppression', err);
      }
    });
  }

  getRendezVousByClientId() {
    this.rendezVousService.findByClientId(this.clientId).subscribe({
      next: (data) => {
        this.rendezVousList = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des rendez-vous', err);
      }
    });
  }

  private formatDateForInput(date: string) {
    const d = new Date(date);
    return d.toISOString().slice(0, 16); // format 'YYYY-MM-DDTHH:mm'
  }
}
