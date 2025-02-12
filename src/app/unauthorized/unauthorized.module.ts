import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LatestquestionComponent } from './latestquestion/latestquestion.component';


@NgModule({
  declarations: [
    HomeComponent,
    LatestquestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UnauthorizedModule { }
