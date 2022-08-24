import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterVerificationComponent } from '../register-verification/register-verification.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  openDialogVerify(){
    this.dialogRef.open(RegisterVerificationComponent, {
      width: '410px',
      height: '466px',
      hasBackdrop: true
    })
  }

  ngOnInit(): void {
  }

}
