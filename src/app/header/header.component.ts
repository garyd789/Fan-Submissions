import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AccountPopupComponent } from '../account-popup/account-popup.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  openDialogLogin(){
    this.dialogRef.open(LoginFormComponent, {
      width: '410px',
      height: '466px',
      hasBackdrop: true
    })
  }

  openDialogAccountPopup(){
    this.dialogRef.open(AccountPopupComponent, {
      
    })
  }
  ngOnInit(): void {
  }


}
