import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../usuarios/users.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  @Input() descripcion: string = '';
  @Output() mensajeEnviado = new EventEmitter<string>();
  saludo: string = '';
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.enviarMensajeAlPadre('Hola viejo!');
    this.usersService.mensajero.subscribe((saludo: string) => {
      this.saludo = "Me llego este mensaje " + saludo;
    });
  }

  enviarMensajeAlPadre(mensaje: string) {
    this.mensajeEnviado.emit(mensaje);
  }
}
