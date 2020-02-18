import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent, 
    MenuComponent, 
    RightMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports : [
    HeaderComponent
  ]
})
export class HeaderModule { }
