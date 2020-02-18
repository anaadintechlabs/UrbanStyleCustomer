import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockFeatureProductComponent } from './feature-product/feature-product.component';
import { BlockBannerComponent } from './block-banner/block-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        BlockFeatureProductComponent,
        BlockBannerComponent
    ],
    imports: [ 
        CommonModule,
        SharedModule
     ],
    exports: [
        BlockFeatureProductComponent,
        BlockBannerComponent
    ],
    providers: [],
})
export class BlockModule {}