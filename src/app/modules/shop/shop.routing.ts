import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleProductViewComponent } from './pages/single-product-view/single-product-view.component';

const routes: Routes = [
    {
        path: 'product/:id',
        component: SingleProductViewComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }