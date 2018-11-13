import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { StandingsModule } from './modules/standings/standings.module';
import { MatchesModule } from './modules/matches/matches.module';
import { environment } from '../environments/environment';
import { InfoModule } from './modules/info/info.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatchesModule,
    InfoModule,
    StandingsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'sc2-replay')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
