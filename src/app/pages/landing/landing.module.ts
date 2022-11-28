import { ComponentsModule } from './../../components/components.module';
import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
