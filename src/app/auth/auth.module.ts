import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutes
  ]
})
export class AuthModule { }
