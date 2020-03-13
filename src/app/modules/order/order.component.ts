import { Component, OnInit, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CartService } from 'src/_service/product/cart.service';
import { ApiService } from 'src/_service/http_&_login/api.service';
import { UserService } from 'src/_service/http_&_login/user-service.service';
import { User } from 'src/_modals/user';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import * as $ from 'jquery';
import { OrderService } from 'src/_service/product/order.service';
import { ActivatedRoute } from '@angular/router';

type orderList = {
  productVariantId : number,
  qty : number,
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public user : User;
  public ordersList : orderList[] = [];
  public productID : string;
  constructor(
    private _cartService : CartService,
    private _apiService : ApiService,
    private _userService : UserService,
    @Inject(PLATFORM_ID) private platformId: any,
    private zone: NgZone,
    public _orderService : OrderService,
    public _route : ActivatedRoute
  ) { 
    if(!this._orderService.checkoutItem){
      this._route.paramMap.subscribe(param=>{
        this.productID = param.get('id');
        this.getProductByID(this.productID);
      })
    }
    this._cartService.items$.subscribe(data=>{
      console.log(data);
      data.forEach(ele=>{
        let obj : orderList = {
          productVariantId : ele.product.productVariantId,
          qty : ele.quantity
        }
        this.ordersList.push(obj);
      })
    });
  }

  getProductByID(id:string){
    // this._apiService.get()
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              var current_fs, next_fs, previous_fs; //fieldsets
              var opacity;
              
              $(".next").click(function(){
              
              current_fs = $(this).parent();
              next_fs = $(this).parent().next();
              
              //Add Class Active
              $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
              
              //show the next fieldset
              next_fs.show();
              //hide the current fieldset with style
              current_fs.animate({opacity: 0}, {
              step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
              
              current_fs.css({
              'display': 'none',
              'position': 'relative'
              });
              next_fs.css({'opacity': opacity});
              },
              duration: 600
              });
              });
              
              $(".previous").click(function(){
              
              current_fs = $(this).parent();
              previous_fs = $(this).parent().prev();
              
              //Remove class active
              $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
              
              //show the previous fieldset
              previous_fs.show();
              
              //hide the current fieldset with style
              current_fs.animate({opacity: 0}, {
              step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;
              
              current_fs.css({
              'display': 'none',
              'position': 'relative'
              });
              previous_fs.css({'opacity': opacity});
              },
              duration: 600
              });
              });
              
              $(".submit").click(function(){
              return false;
              })
            }, 300);
        });
    }
  }

  placeOrder() {
    this.user = JSON.parse(this._userService.getUser());
    let body = {
      "userId": this.user.id,
      "paymentType":"CREDIT_CARD",
      "from":"Sanchit",
      "to":"Paras",
      "userOrderList" : this.ordersList,
      "address":{"id":1},
      "bankInfo":{"id":1}
    }
    this._apiService.postOrder('api/saveOrder',body).subscribe(res=>{
      console.log(res);
    })
  }

  minus() {
    if(this._orderService.checkoutItem.quantity > 1) {
      this._orderService.checkoutItem.quantity--;
    }
  }

  plus() {
      this._orderService.checkoutItem.quantity++;
  }
}
