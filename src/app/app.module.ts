import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VoteComponent } from './vote/vote.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { VoteCompleteComponent } from './vote-complete/vote-complete.component';
import { ResultComponent } from './result/result.component';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component'
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { VoteCandidateComponent } from './vote-candidate/vote-candidate.component';
import { VoterListComponent } from './voter-list/voter-list.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    VoteComponent,
    CandidatesComponent,
    VoteCompleteComponent,
    ResultComponent,
    RegisterCandidateComponent,
    CandidateListComponent,
    VoteCandidateComponent,
    VoterListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
