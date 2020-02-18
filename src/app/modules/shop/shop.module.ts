import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductViewComponent } from './pages/single-product-view/single-product-view.component';
import { ShopRoutingModule } from './shop.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SingleProductViewComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
