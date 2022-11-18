import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './login-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, NgIf, MatInputModule, MatButtonModule],
  declarations: [LoginFormComponent],
  providers: [],
  exports: [LoginFormComponent]
})
export class LoginFormComponentModule {
}
