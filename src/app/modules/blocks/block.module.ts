import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { BlockFeatureProductComponent } from './feature-product/feature-product.component';
import { BlockBannerComponent } from './block-banner/block-banner.component';

@NgModule({
    declarations: [
        BlockFeatureProductComponent,
        BlockBannerComponent
    ],
    imports: [ 
        CommonModule,
        OwlModule
     ],
    exports: [
        BlockFeatureProductComponent,
        BlockBannerComponent
    ],
    providers: [],
})
export class BlockModule {}