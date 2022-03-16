import { User } from './user.model';

export class UsersService {
  users: User[] = [
    new User('Pedro', 'Picapiedra'),
    new User('Pablo', 'Marmol')
  ];

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
}
