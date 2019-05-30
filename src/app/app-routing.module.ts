import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { NewsComponent } from './news/news.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'news', component: NewsComponent },
  { path: 'club', component: ClubComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
