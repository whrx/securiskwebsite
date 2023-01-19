import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../../components/components.module';
import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    SlickCarouselModule,
    AngularFirestoreModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
