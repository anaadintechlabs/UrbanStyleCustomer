import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/_service/http_&_login/api.service';

import { urls } from '../../../constants/urlLists';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ProductVerient } from 'src/_modals/product';

@Component({
  selector: 'home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})

export class HomeOneComponent implements OnInit {

  public featuredProduct : ProductVerient[] = [];
  
  constructor(
    private _apiService : ApiService
  ) { }

  ngOnInit() {
    this.getAllFeaturedProducts();
  }

  public getAllFeaturedProducts() {
    return this._apiService.get(urls.allFeaturedProducts).subscribe(data=>{
      if(data.isSuccess){
        this.featuredProduct = data.featuredProducts;
      } else {

      }
    },err=>{
      catchError(err);
    })
  } 


}
