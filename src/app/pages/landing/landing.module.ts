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
    SlickCarouselModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
