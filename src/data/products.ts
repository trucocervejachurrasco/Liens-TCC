import { Product } from '@/context/CartContext';
import tshirtImage from '@/assets/camiseta1.jpg';
import jacketImage from '@/assets/product-jacket.jpg';
import dressImage from '@/assets/product-dress.jpg';
import jeansImage from '@/assets/product-jeans.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Creme Liens Paris ',
    price: 95.99,
    image: tshirtImage,
    category: 'Camisetas'
  },
  {
    id: '2',
    name: 'Jaqueta Jeans Clássica',
    price: 299.90,
    image: jacketImage,
    category: 'Jaquetas'
  },
  {
    id: '3',
    name: 'Vestido Elegante',
    price: 199.90,
    image: dressImage,
    category: 'Vestidos'
  },
  {
    id: '4',
    name: 'Calça Jeans Slim',
    price: 149.90,
    image: jeansImage,
    category: 'Calças'
  },
  {
    id: '5',
    name: 'Camiseta Oversized',
    price: 79.90,
    image: camiseta1,
    category: 'Camisetas'
  },
  {
    id: '6',
    name: 'Blazer Minimalista',
    price: 399.90,
    image: jacketImage,
    category: 'Blazers'
  }
];
