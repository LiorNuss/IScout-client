import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {LoginComponent} from "./login/login/login.component";
import {LoginGuardService} from "./login/login-guard.service";
import {PlayerProfileComponent} from "./player-profile/player-profile/player-profile.component";
import {PlayerRegistrationComponent} from "./player-registration/player-registration/player-registration.component";
import {ScouterRegistrationComponent} from "./scouter-registration/scouter-registration/scouter-registration.component";
import {AboutComponent} from "./about/about/about.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'playerRegistration', component: PlayerRegistrationComponent },
  { path: 'scouterRegistration', component: ScouterRegistrationComponent},
  { path: 'profile/:playerId', component: PlayerProfileComponent, canActivate: [LoginGuardService]  },
  { path: 'profileOfDifferentPlayer/:playerId', component: PlayerProfileComponent, canActivate: [LoginGuardService]  },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
