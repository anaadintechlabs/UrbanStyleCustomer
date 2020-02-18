import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { SideMenuDirective } from './directives/sideMenu';
import { ImageSliderComponent } from './component/image-slider/image-slider.component';
import { ProductDescriptionComponent } from './component/product-description/product-description.component';
import { ReviewsComponent } from './component/reviews/reviews.component';
import { ProductCarouselComponent } from './component/product-carousel/product-carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ProductCardComponent,
        SideMenuDirective,
        ImageSliderComponent,
        ProductDescriptionComponent,
        ReviewsComponent,
        ProductCarouselComponent
    ],
    imports: [ 
        CommonModule,
        OwlModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    exports: [
        ProductCardComponent,
        ImageSliderComponent,
        ProductDescriptionComponent,
        ReviewsComponent,
        ProductCarouselComponent,
        SideMenuDirective
    ],
    providers: [],
})
export class SharedModule {}