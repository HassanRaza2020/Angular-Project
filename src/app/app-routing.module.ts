import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './unauthorized/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { LatestquestionComponent } from './unauthorized/latestquestion/latestquestion.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { QuestionsComponent } from './auth/questions/questions.component';
import { PostQuestionComponent } from './auth/post-question/post-question.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent  }, 
  { path: 'signup', component: SignupComponent }, 
  {path: 'login', component:LoginComponent},
  {path: 'latest-question', component:LatestquestionComponent},
  {path:'verification', component:VerificationComponent, },
  {path:'question', component:QuestionsComponent, canActivate:[AuthGuard]},
  {path:'post-question', component:PostQuestionComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: '', pathMatch:'full' }  
];

@NgModule({
  declarations: 
  [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
