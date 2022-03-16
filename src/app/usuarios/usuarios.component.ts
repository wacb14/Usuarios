import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  mensaje: string = '';
  constructor() {}

  ngOnInit(): void {}

  recibirMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }
}
