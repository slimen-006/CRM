import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ContratService } from '../service/contrat.service';
import { AuthentificationService } from 'src/app/account/auth/services/authentification.service';
import { UserService } from 'src/app/account/auth/services/user.service';

@Component({
  selector: 'app-contrat-client',
  templateUrl: './contrat-client.component.html',
  styleUrls: ['./contrat-client.component.scss']
})
export class ContratClientComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
