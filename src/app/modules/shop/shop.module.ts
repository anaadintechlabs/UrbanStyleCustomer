import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductViewComponent } from './pages/single-product-view/single-product-view.component';
import { ShopRoutingModule } from './shop.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './pages/shop/shop.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SingleProductViewComponent,
    ShopComponent,
    FiltersComponent,
    ShopHeaderComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
