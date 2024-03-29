import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { FormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';

import { MainHeaderComponent } from '../header/main-header/main-header.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CutsomerProfileComponent } from './cutsomer-profile/cutsomer-profile.component';
import { AddressChangeComponent } from './address-change/address-change.component';
import { MobileEditComponent } from './mobile-edit/mobile-edit.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    UiModule,
  ],
  declarations: [  ChangePasswordComponent, CutsomerProfileComponent, AddressChangeComponent, MobileEditComponent,SignInPageComponent,SignUpPageComponent],
})
export class AuthModule {
}
