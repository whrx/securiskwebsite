import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AngularFirestoreModule
  ]
})
export class ServicesModule { }
