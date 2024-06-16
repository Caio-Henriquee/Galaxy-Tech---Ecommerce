import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { title } from 'node:process';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  RegistroService = inject(LoginService);
  Router = inject(Router);

    form = new FormGroup({
      usuario : new FormControl<string>('', {nonNullable : true,
        validators: Validators.required}),
      email : new FormControl<string>('', {nonNullable : true,
        validators : [Validators.required, Validators.email]
      }),
      senha : new FormControl<string>('', {nonNullable : true,
        validators : [Validators.required, Validators.minLength(6)]
      }),
      dtNasc : new FormControl<any>('', {nonNullable : true,
        validators : [Validators.required]
      }),
    })


  formSubmitAttempt = false;

  registrar(): void {
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      this.RegistroService.post({
        usuario: this.form.controls.usuario.value,
        email: this.form.controls.email.value,
        senha: this.form.controls.senha.value,
        dtNasc: this.form.controls.dtNasc.value,
      }).subscribe(() => {
        alert('Sucesso');
        this.formSubmitAttempt = false;
        this.Router.navigate(['/login'])
      });
  }else {
    this.markAllAsTouched();
  }
  }

  private markAllAsTouched(): void {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
      control.markAsDirty();
    });
  }



}
