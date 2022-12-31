import { MatDialogModule } from '@angular/material/dialog';
import { ProductsModule } from './pages/products/products.module';
import { LeadershipTeamModule } from './pages/leadership-team/leadership-team.module';
import { SectorModule } from './pages/sector/sector.module';
import { SectorsModule } from './pages/sectors/sectors.module';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { LandingModule } from './pages/landing/landing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisableRightClickDirective } from './disable-right-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisableRightClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    AboutUsModule,
    SectorsModule,
    SectorModule,
    LeadershipTeamModule,
    ProductsModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
