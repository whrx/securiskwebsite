import { ComponentsModule } from './../../components/components.module';
import { AboutUsComponent } from './about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
