import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() allImages : any[]=[];

  constructor() { }

  ngOnInit() {
  }

}
