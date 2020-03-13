import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/_service/http_&_login/api.service';
import { urls } from 'src/constants/urlLists';
import { UserService } from 'src/_service/http_&_login/user-service.service';
import { User } from 'src/_modals/user';
import { Address } from 'src/_modals/address';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {

  address : Address[] = [];

  constructor(
    private _apiService : ApiService,
    private _userService : UserService,
  ) { }

  ngOnInit(): void {
    this.getAllAdress();
  }

  getAllAdress() {
    let user:User = this._userService.getCurrentUser();
    this._apiService.postUser(`${urls.getAllAddress}?userId=${user.id}`).subscribe(res=>{
      console.log(res.data.addressDetails);
      this.address = res.data.addressDetails;
    })
  }
}
