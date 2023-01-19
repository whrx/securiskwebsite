import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorComponent } from './sector.component';



@NgModule({
  declarations: [
    SectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularFirestoreModule
  ]
})
export class SectorModule { }
