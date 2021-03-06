import { MatchesComponent } from './modules/matches/matches.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './modules/standings/standings.component';
import { HomeComponent } from './modules/home/home.component';
import { InfoComponent } from './modules/info/info.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'matches', component: MatchesComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
