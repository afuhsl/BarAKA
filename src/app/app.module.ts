import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgendarComponent } from './agendar/agendar.component';
import { CitasComponent } from './citas/citas.component';
import { MenuComponent } from './menu/menu.component';
import { MansoryComponent } from './mansory/mansory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { BuscarComponent } from './buscar/buscar.component';

//Date-picker mat.spinner  angular material 1
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from "@mat-datetimepicker/core";

//input angularmaterial 2
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Servicio
import { TablaService } from './tabla.service';
import {PromocionesService} from './shared/promociones.service';

//AngularMaterial
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';

//primeNG
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {MatIconModule} from '@angular/material/icon';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { DomseguroPipe } from './domseguro.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { DetallesComponent } from './detalles/detalles.component';
import { OpinionComponent } from './opinion/opinion.component';
import { CardComponent } from './card/card.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { WindowsService } from './windows.service';
import { FirebaseService } from './firebase.service';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FQComponent } from './fq/fq.component';
import { GraficasComponent } from './graficas/graficas.component';
import { BebidasListComponent } from './bebidas-list/bebidas-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AgendarComponent,
    CitasComponent,
    MenuComponent,
    MansoryComponent,
    SidenavComponent,
    FooterComponent,
    BuscarComponent,
    DomseguroPipe,
    DetallesComponent,
    OpinionComponent,
    CardComponent,
    LoginComponent,
    AdminComponent,
    PhoneLoginComponent,
    ContactoComponent,
    FQComponent,
    GraficasComponent,
    BebidasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule, 
    MatFormFieldModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    MatProgressSpinnerModule,
    MatSidenavModule, 
    MatListModule,
    InputTextModule,
    MatIconModule,
    CalendarModule,
    ToastModule,
    MessagesModule,
    HttpClientModule,
    DialogModule,
    MatTabsModule,
    TooltipModule,
    ToastModule,
    ReactiveFormsModule,
    MatCardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [TablaService, MessageService, PromocionesService, WindowsService, FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
