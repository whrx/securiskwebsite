import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LogoComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class ComponentsModule { }
