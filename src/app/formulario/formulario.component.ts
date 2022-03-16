import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../usuarios/user.model';
import { UsersService } from '../usuarios/users.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  userNameInput: string;
  passwordInput: string;
  indice: number;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    if (this.indice) {
      // Si trae un indice es porque estamos en el modo de edición y cargamos los datos
      let user = this.usersService.buscar(this.indice);
      this.userNameInput = user.userName;
      this.passwordInput = user.password;
    }
  }

  guardarUser() {
    if (this.indice) {
      this.usersService.modificar(new User(this.userNameInput, this.passwordInput),this.indice);
    } else {
      this.usersService.agregar(
        new User(this.userNameInput, this.passwordInput)
      );
    }

    this.router.navigate(['users']);
  }

  navUsers() {
    this.router.navigate(['users']);
  }
}
