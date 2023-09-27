import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { products } from '../data/data';
import Product from '../../models/product.model';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  products: Product[] = products;

  private _cart = new BehaviorSubject<any>(this.products);
  cart = this._cart.asObservable();

  private _wishList = new BehaviorSubject<any>(this.products);
  wishList = this._wishList.asObservable();

  constructor() {}

  setCart(value) {
    this._cart.next([...this._cart.value, value]);
  }

  setWishList(value) {
    this._wishList.next([...this._wishList.value, value]);
  }

  updateCart(value) {
    this._cart.next(value);
  }
  updateWishList(value) {
    this._wishList.next(value);
  }

  get loadCart() {
    return this.cart;
  }

  get loadWishList() {
    return this.wishList;
  }

  getProducts(category: string = ''): Observable<Product[]> {
    return interval(100).pipe(
      take(1),
      map(() => {
        if (category != '') {
          const product = this.products.filter(
            (item) => item.category === category
          );
          return product;
        }
        return this.products;
      })
    );
  }

  getWishlist(): Observable<Product[]> {
    return interval(100).pipe(
      take(1),
      map(() => {
        const products = this.products.filter((item) => item.fav == true);
        return products;
      })
    );
  }

  getProduct(id: string): Observable<Product> {
    return interval(100).pipe(
      map(() => {
        const product = this.products.filter((item) => item.id === id);
        return product[0];
      })
    );
  }

  markProductFav(productId: string, isFav: boolean) {
    this.products.map((item, i) => {
      if (item.id === productId) {
        this.products[i]['fav'] = isFav;
      }
    });
  }
}
