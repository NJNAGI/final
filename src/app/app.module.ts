import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemandeComponent } from './components/demande/demande.component';
import { PointageComponent } from './components/pointage/pointage.component';
import { TraitementH1Component } from './components/traitement-h1/traitement-h1.component';
import { TraitementGRHComponent } from './components/traitement-grh/traitement-grh.component';
import { TraitementpointageComponent } from './components/traitementpointage/traitementpointage.component';
import { DetaildemandeComponent } from './components/detaildemande/detaildemande.component';
import { CommandeComponent } from './components/commande/commande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ListdemandesComponent } from './components/listdemandes/listdemandes.component';
import { Traitementh2Component } from './components/traitementh2/traitementh2.component';
import { DetaildemandeH1Component } from './components/detaildemande-h1/detaildemande-h1.component';
import { DetaildemandeH2Component } from './components/detaildemande-h2/detaildemande-h2.component';
import { ListeH1Component } from './components/liste-h1/liste-h1.component';
import { ListeH2Component } from './components/liste-h2/liste-h2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from './components/notification/notification.component';
import { AddinterimaireComponent } from './components/addinterimaire/addinterimaire.component';
import { ListeinterimaireComponent } from './components/listeinterimaire/listeinterimaire.component';
import { ListeprestataireComponent } from './components/listeprestataire/listeprestataire.component';
import { AddprestataireComponent } from './components/addprestataire/addprestataire.component';
import { AddbudgetComponent } from './components/addbudget/addbudget.component';
import { ListbudgetComponent } from './components/listbudget/listbudget.component';
import { RecherchePipe } from './pipes/recherche.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Recherche1Pipe } from './pipes/recherche1.pipe';
import { DatePipe } from '@angular/common';
import { DetailcommandeComponent } from './components/detailcommande/detailcommande.component';
import { ListedemandeurComponent } from './components/listedemandeur/listedemandeur.component';
import { DetaildemandedemandeurComponent } from './components/detaildemandedemandeur/detaildemandedemandeur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    FooterComponent,
    LoginComponent,
    RegistreComponent,
    ProfileComponent,
    NavbarComponent,
    DemandeComponent,
    PointageComponent,
    TraitementH1Component,
    TraitementGRHComponent,
    TraitementpointageComponent,
    DetaildemandeComponent,
    CommandeComponent,
    ConsultationComponent,
    ListdemandesComponent,
    Traitementh2Component,
    DetaildemandeH1Component,
    DetaildemandeH2Component,
    ListeH1Component,
    ListeH2Component,
    NotificationComponent,
    AddinterimaireComponent,
    ListeinterimaireComponent,
    ListeprestataireComponent,
    AddprestataireComponent,
    AddbudgetComponent,
    ListbudgetComponent,
    RecherchePipe,
    Recherche1Pipe,
    DetailcommandeComponent,
    ListedemandeurComponent,
    DetaildemandedemandeurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
