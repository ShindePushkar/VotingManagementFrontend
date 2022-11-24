import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VoteComponent } from './vote/vote.component';
import { VoteCompleteComponent } from './vote-complete/vote-complete.component';
import {CandidateListComponent} from './candidate-list/candidate-list.component';
import {RegisterCandidateComponent}from './register-candidate/register-candidate.component'
import { ResultComponent } from './result/result.component'
import { VoteCandidateComponent } from './vote-candidate/vote-candidate.component'
import { VoterListComponent } from './voter-list/voter-list.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about-us',component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'vote', component:VoteComponent},
  { path: 'vote-complete', component:VoteCompleteComponent},
  { path:'candidate-list', component:CandidateListComponent},
  { path: 'register-candidate', component:RegisterCandidateComponent},
  { path: 'result', component:ResultComponent},
  { path: 'vote-candidate', component:VoteCandidateComponent},
  { path : 'voter-list', component:VoterListComponent }





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
