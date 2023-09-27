import Product from '../../models/product.model';

export const slides = [
  {
    image: '../../../assets/images/slider1.jpg',
    link_to: '',
  },
  {
    image: '../../../assets/images/slider5.jpg',
    link_to: '',
  },
  {
    image: '../../../assets/images/slider6.jpg',
    link_to: '',
  },
  {
    image: '../../../assets/images/slider4.jpg',
    link_to: '',
  },
  {
    image: '../../../assets/images/slider7.jpg',
    link_to: '',
  },
];

const productCategories = {
  'Jackets':'Jackets',
  'Shirts':'Shirts',
  'Jeans': 'Jeans',
  'Bags':'Bags',
  'Shoes': 'Shoes',
  'Tops': 'Tops',
  'Dresses': 'Dresses',
  'Outfits':'Outfits',
  'Suits':'Suits',
  'Sweatshirts':'Sweatshirts'
}

export const products: Product[] = [
  {
    id: 'p001',
    brand: 'test brand',
    category: productCategories.Jackets,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product01.png',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p002',
    brand: 'test brand',
    category: productCategories.Tops,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product02.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p003',
    brand: productCategories.Dresses,
    category: 'test',
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product03.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p004',
    brand: 'test brand',
    category: productCategories.Outfits,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product04.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p005',
    brand: 'test brand',
    category: productCategories.Jackets,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product05.jpg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p006',
    brand: 'test brand',
    category: productCategories.Outfits,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product06.jpg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p007',
    brand: 'test brand',
    category: productCategories.Outfits,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product07.jpg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p008',
    brand: 'test brand',
    category: productCategories.Tops,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product08.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p009',
    brand: 'test brand',
    category: productCategories.Dresses,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product09.jpg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p010',
    brand: 'test brand',
    category: productCategories.Suits,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product10.jpg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p011',
    brand: 'test brand',
    category: productCategories.Shirts,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product11.jpg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p012',
    brand: 'test brand',
    category: productCategories.Shirts,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product12.jpg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p013',
    brand: 'test brand',
    category: productCategories.Bags,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product13.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p015',
    brand: 'test brand',
    category: productCategories.Outfits,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product15.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p016',
    brand: 'test brand',
    category: productCategories.Jackets,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product16.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p017',
    brand: 'test brand',
    category: productCategories.Sweatshirts,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product17.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p018',
    brand: 'test brand',
    category: productCategories.Sweatshirts,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product18.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p019',
    brand: 'test brand',
    category: productCategories.Bags,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product19.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p020',
    brand: 'test brand',
    category: productCategories.Jackets,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product20.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p021',
    brand: 'test brand',
    category: productCategories.Outfits,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product21.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p022',
    brand: 'test brand',
    category: productCategories.Bags,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product22.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
  {
    id: 'p023',
    brand: 'test brand',
    category: productCategories.Jeans,
    description: 'lorem fubr furebfurbfbr hfiurhf. frhf urf. ufbrbf ubrfb ubfurbf ufburbfbr',
    image: '../../../assets/images/product23.jpeg',
    name: 'Product Name',
    numReviews: 23,
    price: 300,
    rating: 2.5,
    sizes: ['s', 'm', 'l', 'xl'],
    fav: false
  },
];

export const wishlist = [];

export const cart = [];

export const categories = ['all', ...Object.values(productCategories)];
