import { EventEmitter } from '@angular/core';
import { User } from './user.model';

export class UsersService {
  users: User[] = [
    new User('Pedro', 'Picapiedra'),
    new User('Pablo', 'Marmol')
  ];
  mensajero = new EventEmitter<string>();

  agregar(user: User) {
    this.users.push(user);
  }

  eliminar(id: number) {
    this.users.splice(id, 1);
  }
  modificar(user:User, id:number){
    this.users[id]=user;
  }
  buscar(id:number):User{
    return this.users[id];
  }

  //-- Para comunicar dos componentes
  comunicarMensaje(mensaje:string){
    this.mensajero.emit(mensaje);
  }
}
