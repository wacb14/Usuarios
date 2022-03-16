import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  { path: '', component: ListadoComponent },
  // {
  //   path: 'users',
  //   component: ListadoComponent,
  //   children: [
  //     { path: 'add', component: FormularioComponent },
  //     { path: 'edit', component: FormularioComponent }
  //   ],
  // }
  { path: 'users', component: ListadoComponent },
  { path: 'users/add', component: FormularioComponent },
  { path: 'users/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
