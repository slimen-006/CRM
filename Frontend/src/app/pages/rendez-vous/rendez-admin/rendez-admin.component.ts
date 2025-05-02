import { Component, OnInit } from '@angular/core';
import { RendezService } from '../service/rendez.service';
import { UserService } from 'src/app/account/auth/services/user.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rendez-admin',
  templateUrl: './rendez-admin.component.html',
  styleUrls: ['./rendez-admin.component.scss']
})
export class RendezAdminComponent implements OnInit {

  rendezVousList: any[] = [];
  listeCommercial: any[] = [];
  modalRef!: NgbModalRef;
  currentRendezVousId: number | null = null;

  // Valeurs du formulaire
  selectedCommercialId!: number;
  selectedStatus!: string;

  constructor(
    private rendezVousService: RendezService,
    private userService : UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.findAll();
    this.findAllCommercial();
  }

  findAll() {
    this.rendezVousService.findAll().subscribe({
      next: (data) => {
        this.rendezVousList = data;
        console.log(data)
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des rendez-vous', err);
      }
    });
  }

  findAllCommercial() {
    this.userService.findByRole('Commercial').subscribe({
      next: (result) => this.listeCommercial = result,
      error: (err) => console.error('Erreur lors de la récupération des commerciaux', err)
    });
  }

  changeStatus(rendezvousId: number, content: any) {
    this.currentRendezVousId = rendezvousId;
    this.selectedStatus = '';
    this.selectedCommercialId = 0;
    this.modalRef = this.modalService.open(content, { centered: true, size: 'lg' });
  }

  submitStatusChange() {
    debugger 
    if (this.currentRendezVousId && this.selectedCommercialId && this.selectedStatus) {
      this.rendezVousService.updateStatus(
        this.selectedCommercialId,
        this.currentRendezVousId,
        this.selectedStatus 
      ).subscribe({
        next: () => {
          this.findAll();
          this.closeModal();
        },
        error: (err) => console.error('Erreur lors de la mise à jour du statut', err)
      });
    }
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  onDelete(rendezVousId: number): void {
    this.rendezVousService.delete(rendezVousId).subscribe({
      next: () => this.findAll(),
      error: (err) => console.error('Erreur lors de la suppression', err)
    });
  }
}
