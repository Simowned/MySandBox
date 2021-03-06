import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { NewsComponent } from './news/news.component';
import { ClubComponent } from './club/club.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameCardComponent } from './game-card/game-card.component';
import { RankingComponent } from './ranking/ranking.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    TeamComponent,
    NewsComponent,
    ClubComponent,
    PageNotFoundComponent,
    GameCardComponent,
    RankingComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
