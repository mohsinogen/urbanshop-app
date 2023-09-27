import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../services/shared/store.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  products = [];
  constructor(private store: StoreService, private router: Router) {
    
  }

  ionViewWillEnter(){
    this.getWishList();
  }

  ngOnInit() {}

  getWishList() {
    this.store.getWishlist().subscribe({
      next:(res)=>{
        console.log('wishlist',res);
        
          this.products = res;
      }
    });
  }

  goTo(slug) {
    this.router.navigate([`/product-show/${slug}`]);
  }

  removeFromList(event,productId) {
    event.stopPropagation();
    this.store.markProductFav(productId, false);
    this.getWishList();
  }

  format(value, currency = 'USD') {
    return new Intl.NumberFormat('en-US', <any>{
      style: 'currency',
      currency: currency,
      currencySign: 'accounting',
      signDisplay: 'auto',
    }).format(value);
  }
}
