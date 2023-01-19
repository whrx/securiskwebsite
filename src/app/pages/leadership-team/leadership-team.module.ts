import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipTeamComponent } from './leadership-team.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LeadershipTeamComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatDialogModule,
    AngularFirestoreModule
  ]
})
export class LeadershipTeamModule { }
