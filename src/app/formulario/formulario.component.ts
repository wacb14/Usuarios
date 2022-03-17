import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../usuarios/user.model';
import { UsersService } from '../usuarios/users.service';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  userForm = this.fb.group({
    userNameInput : ['', Validators.required],
    passwordInput : ['', Validators.required]
  });

  indice: number;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    if (this.indice) {
      // Si trae un indice es porque estamos en el modo de edición y cargamos los datos
      let user = this.usersService.buscar(this.indice);
      this.userForm.get("userNameInput")?.setValue(user.userName);
      this.userForm.get("passwordInput")?.setValue(user.password);
    }
  }

  guardarUser() {
    let userNameInput = this.userForm.get("userNameInput");
    let passwordInput = this.userForm.get("passwordInput");
    if(userNameInput && passwordInput){
      if (this.indice) {
        this.usersService.modificar(
          new User(userNameInput.value, passwordInput.value),
          this.indice
        );
      } else {
        this.usersService.agregar(
          new User(userNameInput.value, passwordInput.value)
        );
      }
    }
    
    this.router.navigate(['users']);
  }

  navUsers() {
    this.router.navigate(['users']);
  }
}