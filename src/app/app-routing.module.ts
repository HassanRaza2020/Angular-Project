import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './unauthorized/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'signup', component: SignupComponent }, 
  {path: 'login', component:LoginComponent},
  { path: '**', redirectTo: '' }  
];

@NgModule({
  declarations: 
  [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // ✅ Import RouterModule with routes
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
