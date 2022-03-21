import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../usuarios/user.model';
import { UsersService } from '../usuarios/users.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  users: User[] = [];
  constructor(private usersService: UsersService,
    private router: Router) {
    this.users = usersService.users;
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(
      (users)=>{console.log(users);}
    );
  }

  navNewUser(){
    this.router.navigate(["users/add"]);
  }

  eliminarUser(id:number){
    this.usersService.eliminar(id);
  }
}
