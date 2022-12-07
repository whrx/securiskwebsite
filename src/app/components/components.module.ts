import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LeadershipTeamProfileComponent } from './leadership-team-profile/leadership-team-profile.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        LeadershipTeamProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatDialogModule
    ],
    providers: [],
    exports: [
        HeaderComponent,
        FooterComponent,
        LeadershipTeamProfileComponent
    ]
})
export class ComponentsModule { }
