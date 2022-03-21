import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { User } from './user.model';

@Injectable()
export class UsersService {
  users: User[] = [
    new User('Pedro', 'Picapiedra'),
    new User('Pablo', 'Marmol')
  ];
  
  constructor(private dataService : DataService){

  }
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

  getAllUsers(){
    return this.dataService.getAllUsers();
  }
}
