import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/_service/product/cart.service';
import { CartItem } from 'src/_modals/cartItem';
declare var $: any;
@Component({
  selector: 'cartSideMenu',
  templateUrl: './cart-side-menu.component.html',
  styleUrls: ['./cart-side-menu.component.scss']
})
export class CartSideMenuComponent {
  removedItems: CartItem[] = [];

  constructor(
    public cart : CartService
  ) { }

    remove(item: CartItem): void {
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item)});
    }

    hide() {
      $('body').removeClass('open-cart')
    }

}
