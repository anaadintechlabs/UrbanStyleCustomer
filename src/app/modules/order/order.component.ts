import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/_service/product/cart.service';
import { ApiService } from 'src/_service/http_&_login/api.service';
import { UserService } from 'src/_service/http_&_login/user-service.service';
import { User } from 'src/_modals/user';


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
  public ordersList : orderList[] = []
  constructor(
    private _cartService : CartService,
    private _apiService : ApiService,
    private _userService : UserService 
  ) { 
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

  ngOnInit(): void {
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

}
