import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/_service/http_&_login/api.service';
import { UserService } from 'src/_service/http_&_login/user-service.service';
import { User } from 'src/_modals/user';
import { urls } from 'src/constants/urlLists';
import { BankDetails } from 'src/_modals/bankDetails';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {

  bankDetails : BankDetails[] = [];
  constructor(
    private _apiService : ApiService,
    private _userService : UserService,
  ) { }

  ngOnInit(): void {
    this.getAllBankDetails();
  }

  getAllBankDetails() {
    let user:User = this._userService.getCurrentUser();
    this._apiService.postUser(`${urls.getAllBankDetails}?userId=${user.id}`).subscribe(res=>{
      console.log(res.data.bankDetails);
      this.bankDetails = res.data.bankDetails;
    })
  }

}
