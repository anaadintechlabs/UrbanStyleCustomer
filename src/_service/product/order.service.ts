import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CartItem } from 'src/_modals/cartItem';

@Injectable({
    providedIn:'root'
})
export class OrderService {

    public checkoutItem : CartItem;

    public orderForm : FormGroup;
    public addressForm : FormGroup = new FormGroup({
        addressOne : new FormControl(''),
        addressTwo : new FormControl(''),
        user : new FormControl(''),
        country : new FormControl(''),
        state : new FormControl(''),
        cite : new FormControl(''),
        zip : new FormControl(''),
    });
    public bankInfo : FormGroup = new FormGroup({
        user : new FormControl(''),
        bankName : new FormControl(''),
        accountNumber : new FormControl(''),
        accType : new FormControl(''),
        ifscCode : new FormControl('')
    });

    constructor(
        private _fb : FormBuilder,
    ) {
        this.orderForm = this._fb.group({
            bankInfo : this.bankInfo,
            address : this.addressForm
        })
    }
}