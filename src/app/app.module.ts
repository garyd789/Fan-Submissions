import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FanSubmissionsComponent } from './fan-submissions/fan-submissions.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from'@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { AccountPopupComponent } from './account-popup/account-popup.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterVerificationComponent } from './register-verification/register-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FanSubmissionsComponent,
    LoginFormComponent,
    AccountPopupComponent,
    RegisterFormComponent,
    RegisterVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
