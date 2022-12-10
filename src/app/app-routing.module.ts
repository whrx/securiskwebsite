import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { LeadershipTeamComponent } from './pages/leadership-team/leadership-team.component';
import { SectorsComponent } from './pages/sectors/sectors.component';
import { SectorComponent } from './pages/sector/sector.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'sectors', component: SectorsComponent},
  {path: 'sector', component: SectorComponent},
  {path: 'leadership-team', component: LeadershipTeamComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'services', component: ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
