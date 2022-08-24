import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountPopupComponent } from '../account-popup/account-popup.component';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-fan-submissions',
  templateUrl: './fan-submissions.component.html',
  styleUrls: ['./fan-submissions.component.css']
})
export class FanSubmissionsComponent implements OnInit {

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
