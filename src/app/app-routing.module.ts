import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgendarComponent } from './agendar/agendar.component';
import { CitasComponent } from './citas/citas.component';
import { MansoryComponent } from './mansory/mansory.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FQComponent } from './fq/fq.component';
import { GraficasComponent } from './graficas/graficas.component';
import { BebidasListComponent } from './bebidas-list/bebidas-list.component';

//Rutas del menu
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'citas', component: CitasComponent},
  {path: 'mansory', component: MansoryComponent},
  {path: "sidenav", component: SidenavComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: "preguntas", component: FQComponent},
  {path: "graficas", component: GraficasComponent},
  { path: 'citas/:nombre', component: DetallesComponent },
  { path: 'bebidas', component: BebidasListComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
