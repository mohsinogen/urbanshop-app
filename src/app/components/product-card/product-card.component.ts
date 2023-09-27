import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  implements OnInit {

  @Input("product") product: Product;

  constructor() { }

  ngOnInit() {}

  format(value, currency = 'INR') {
    return new Intl.NumberFormat('en-US', <any>{
      style: 'currency',
      currency: currency,
      currencySign: 'accounting',
      signDisplay: 'auto',
    }).format(value);
  }

}
