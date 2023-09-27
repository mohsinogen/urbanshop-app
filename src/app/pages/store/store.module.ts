import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { StorePageRoutingModule } from './store-routing.module';
import { SwiperModule } from 'swiper/angular';

import { StorePage } from './store.page';
import { CartComponent } from '../../components/cart/cart.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StorePageRoutingModule,
    SwiperModule,
  ],
  declarations: [StorePage, CartComponent, ProductCardComponent],
})
export class StorePageModule {}
