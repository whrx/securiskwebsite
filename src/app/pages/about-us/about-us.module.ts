import { ComponentsModule } from './../../components/components.module';
import { AboutUsComponent } from './about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AngularFirestoreModule
  ],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
