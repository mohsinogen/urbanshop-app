import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { CartComponent } from '../../components/cart/cart.component';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';
import { categories, slides, products } from '../../services/data/data';
import { StoreService } from '../../services/shared/store.service';
import { HelperService } from '../../services/shared/helper.service';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  config: SwiperOptions = {
    pagination: { clickable: true },
    // autoplay: {
    //   delay: 5000,
    // },
  };

  categories = [];
  slides = [];
  products = [];
  activeIndex = 0;
  cartSize: Number;
  cart = [];

  productList: Product[] = [];

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private store: StoreService,
    private helper: HelperService,
  ) {
    this.categories = categories;
    this.slides = slides;
    this.getCart();
  }

  getProductList(cat:string){
    this.productList=[]
    this.store.getProducts(cat).subscribe({
      next:(res)=>{
        console.log('in funct');
        
        this.productList=res;
        
      },
    })
  }

  ngOnInit() {
    this.getProductList('')
    SwiperCore.use([Pagination, Autoplay]);
  }

  onSlideChange([Swiper]) {
    console.log('slide change', Swiper);
  }

  goTo(slug) {
    this.router.navigate([`/product-show/${slug}`]);
  }

  async showCart() {
    const modal = await this.modalCtrl.create({
      component: CartComponent,
      
      presentingElement: this.routerOutlet.nativeEl,
      mode: 'ios',
      componentProps: {
        products: this.cart,
      },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);

    if (data?.event == 'CHECKOUT') {
      const loading = await this.helper.loading('Placing your order...');

      loading.present();

      new Promise((resolve) =>
        setTimeout(() => {
          loading.dismiss();
          this.router.navigate(['/success']);
        }, 2000)
      );
    }
  }

  getCart() {
    this.store.loadCart.subscribe((result) => {
      this.cart = result;
    });
  }

  setIndex(index, category) {
    this.activeIndex = index;
    if (category == 'all') {
      this.getProductList('');
    }else{
      this.getProductList(category);
    }
  }

  
}
