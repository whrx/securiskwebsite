import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorsComponent } from './sectors.component';



@NgModule({
  declarations: [
    SectorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SectorsModule { }
