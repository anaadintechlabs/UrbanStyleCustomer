import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/_service/http_&_login/api.service';
import { urls } from 'src/constants/urlLists';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(
    private _apiService : ApiService
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    let body = {
      filterData : [],
      catId : ''
    }
    this._apiService.post(urls.filter+'?searchString='+'phone'+'&catId='+4).subscribe(res=>{
      console.log(res);
    })
  }

}
