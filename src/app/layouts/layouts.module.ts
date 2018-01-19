import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './admintheme/header/header.component';
import { FooterComponent } from './admintheme/footer/footer.component';
import { NavbarComponent } from './admintheme/navbar/navbar.component';
import { LeftpanelComponent } from './admintheme/leftpanel/leftpanel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, LeftpanelComponent]
})
export class LayoutsModule { }
