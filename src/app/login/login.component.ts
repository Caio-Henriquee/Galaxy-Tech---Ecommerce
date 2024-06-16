import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private router = inject(Router);
  private loginService = inject(LoginService);
  private snackBar = inject(MatSnackBar);

  form = new FormGroup({
    email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    senha: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
  });

  formSubmitAttempt = false;

  login(): void {
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      const email = this.form.controls.email.value;
      const senha = this.form.controls.senha.value;

      this.loginService.getAll().subscribe(users => {
        const user = users.find(user => user.email === email && user.senha === senha);
        if (user) {
          this.snackBar.open('Login bem-sucedido', 'Fechar', { duration: 3000, horizontalPosition: 'end', verticalPosition: 'top'});
          this.router.navigate(['/content']);
        } else {
          this.snackBar.open('Credenciais inválidas', 'Fechar', { duration: 3000, horizontalPosition: 'end', verticalPosition: 'top'});
        }
      });
    } else {
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
