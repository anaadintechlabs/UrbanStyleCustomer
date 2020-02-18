import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/_service/http_&_login/user-service.service';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent implements OnInit {

  @Input() reviews : any[] = [];

  productID : string = '';
  constructor(
    private _fb : FormBuilder,
    private _route : ActivatedRoute,
    private _userService : UserService
  ) { 
    this._route.paramMap.subscribe(param=>{
      this.productID = param.get('id');
    })
  }

  ngOnInit() {
  }

  submit() {
    let user = this.reviewForm.get('user') as FormGroup;
    user.get('id').setValue(this.getCurruntUserId());
    let product = this.reviewForm.get('product') as FormGroup;
    product.get('productVariantId').setValue(this.productID);
    if(this.reviewForm.status == 'VALID') {
      console.log(this.reviewForm.value);
    }
  }

  getCurruntUserId() {
    let user = this._userService.getUser();
    return JSON.parse(user).id;
  }

  public reviewForm : FormGroup = this._fb.group({
    user : this._fb.group({
      id : new FormControl('', Validators.required)
    }),
    product : this._fb.group({
      productVariantId : new FormControl('' , Validators.required)
    }),
    review : new FormControl('', Validators.required),
    rating: new FormControl(''),
    title: new FormControl('', Validators.required)
  });

}
