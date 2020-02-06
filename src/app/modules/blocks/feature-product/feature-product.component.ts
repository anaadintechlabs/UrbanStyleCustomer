import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import { options } from '../../../../constants/owl-carousal';

@Component({
  selector: 'block-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss']
})
export class BlockFeatureProductComponent implements OnInit {
  @ViewChild('owlElement',{static:false}) owlElement: OwlCarousel;
  public options = options;
  constructor() { }

  ngOnInit() {
  }

}
