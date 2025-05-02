import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationService } from 'src/app/account/auth/services/authentification.service';
import { UserService } from 'src/app/account/auth/services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  listClient:any
  userForm:FormGroup
  isUpdateMode: boolean;
  selectedUserById: number;
  userSelected: any;
  constructor(
    private userService : UserService ,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.findAllResponsible();  
  }


  findAllResponsible(){
    this.userService.findByRole('Client').subscribe(
      (result) => {
        this.listClient =result ; 
      }
    )
  } 


  updateStatus(userId, idStatus) {
    this.userService
      .putStatusUsers(userId, idStatus, this.listClient[0])
      .subscribe((response) => {
        this.modalService.dismissAll();
        this.findAllResponsible();
      });
  }


  resetFormAndHideModal() {
    this.isUpdateMode = false;
    this.hidenModal(); 
  }

  hidenModal(){
    this.userForm.reset(); 
    this.modalService.dismissAll(); 
  }


    /**
   * Open modal
   * @param content modal content
   */
    verificationModal(content: any) { 
      this.modalService.open(content, { size: 'lg' });
    }



     
  }
