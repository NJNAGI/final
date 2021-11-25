import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbudgetComponent } from './components/addbudget/addbudget.component';
import { AddinterimaireComponent } from './components/addinterimaire/addinterimaire.component';
import { AddprestataireComponent } from './components/addprestataire/addprestataire.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { DemandeComponent } from './components/demande/demande.component';
import { DetailcommandeComponent } from './components/detailcommande/detailcommande.component';
import { DetaildemandeH1Component } from './components/detaildemande-h1/detaildemande-h1.component';
import { DetaildemandeH2Component } from './components/detaildemande-h2/detaildemande-h2.component';
import { DetaildemandeComponent } from './components/detaildemande/detaildemande.component';
import { DetaildemandedemandeurComponent } from './components/detaildemandedemandeur/detaildemandedemandeur.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListbudgetComponent } from './components/listbudget/listbudget.component';
import { ListdemandesComponent } from './components/listdemandes/listdemandes.component';
import { ListeH1Component } from './components/liste-h1/liste-h1.component';
import { ListeH2Component } from './components/liste-h2/liste-h2.component';
import { ListedemandeurComponent } from './components/listedemandeur/listedemandeur.component';
import { ListeinterimaireComponent } from './components/listeinterimaire/listeinterimaire.component';
import { ListeprestataireComponent } from './components/listeprestataire/listeprestataire.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PointageComponent } from './components/pointage/pointage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistreComponent } from './components/registre/registre.component';
import { TraitementGRHComponent } from './components/traitement-grh/traitement-grh.component';
import { TraitementH1Component } from './components/traitement-h1/traitement-h1.component';
import { Traitementh2Component } from './components/traitementh2/traitementh2.component';
import { TraitementpointageComponent } from './components/traitementpointage/traitementpointage.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registre',component:RegistreComponent},
  {path:'home',component:HomeComponent, children:[
  {path:'',component:LayoutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'demande',component:DemandeComponent},
  {path:'pointage',component:PointageComponent},
  {path:'traitementh1/:id',component:TraitementH1Component},
  {path:'traitementgrh',component:TraitementGRHComponent},
  {path:'traitementh2',component:Traitementh2Component},
  {path:'traitementpointage',component:TraitementpointageComponent},
  {path:'detaildemande/:id',component:DetaildemandeComponent},
  {path:'detaildemandedemandeur/:id',component:DetaildemandedemandeurComponent},
  {path:'commande',component:CommandeComponent},
  {path:'consultation',component:ConsultationComponent},
  {path:'liste',component:ListdemandesComponent},
  {path:'listedemandeur',component:ListedemandeurComponent},
  {path:'listeH1',component:ListeH1Component},
  {path:'listeH2',component:ListeH2Component},
  {path:'notification',component:NotificationComponent},
  {path:'detaildemandeH1/:id',component:DetaildemandeH1Component},
  {path:'detaildemandeH2/:id',component:DetaildemandeH2Component},
  {path:'addinterimaire',component:AddinterimaireComponent},
  {path:'listeinterimaire',component:ListeinterimaireComponent},
  {path:'addprestataire',component:AddprestataireComponent},
  {path:'listeprestataire',component:ListeprestataireComponent},
  {path:'addbudget',component:AddbudgetComponent},
  {path:'listebudget',component:ListbudgetComponent},
  {path:'detailcommande/:id',component:DetailcommandeComponent}

  















  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
