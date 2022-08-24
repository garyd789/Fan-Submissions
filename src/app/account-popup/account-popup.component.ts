import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-account-popup',
  templateUrl: './account-popup.component.html',
  styleUrls: ['./account-popup.component.css']
})
export class AccountPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  openDialogLogin(){
    this.dialogRef.open(LoginFormComponent, {
      width: '410px',
      height: '466px',
      hasBackdrop: true
    })
  }
  openDialogRegister(){
    this.dialogRef.open(RegisterFormComponent, {
      width: '410px',
      height: '466px',
      hasBackdrop: true
    })
  }

  ngOnInit(): void {
  }

}
