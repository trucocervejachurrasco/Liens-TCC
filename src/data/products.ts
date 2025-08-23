import { Product } from '@/context/CartContext';
import tshirtImage from '@/assets/camisetapsg.jpg';
import jacketImage from '@/assets/product-jacket.jpg';
import dressImage from '@/assets/product-dress.jpg';
import jeansImage from '@/assets/product-jeans.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Creme Liens Sport Club',
    price: 95.99,
    image: tshirtImage,
    category: 'Camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Camiseta premium em algodão macio com design exclusivo do Liens Sport Club. Perfeita para o dia a dia com estilo casual e conforto.'
  },
  {
    id: '2',
    name: 'Jaqueta Jeans Clássica',
    price: 299.90,
    image: jacketImage,
    category: 'Jaquetas',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Jaqueta jeans atemporal com corte moderno. Ideal para compor looks casuais com um toque de sofisticação.'
  },
  {
    id: '3',
    name: 'Vestido Elegante',
    price: 199.90,
    image: dressImage,
    category: 'Vestidos',
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    description: 'Vestido elegante com caimento perfeito. Ideal para ocasiões especiais ou eventos sociais.'
  },
  {
    id: '4',
    name: 'Calça Jeans Slim',
    price: 149.90,
    image: jeansImage,
    category: 'Calças',
    sizes: ['36', '38', '40', '42', '44', '46'],
    description: 'Calça jeans com modelagem slim fit que valoriza a silhueta. Conforto e estilo em uma única peça.'
  },
  {
    id: '5',
    name: 'Camiseta Oversized',
    price: 79.90,
    image: tshirtImage,
    category: 'Camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Camiseta com modelagem oversized para um visual despojado e moderno. Máximo conforto para o seu dia.'
  },
  {
    id: '6',
    name: 'Blazer Minimalista',
    price: 399.90,
    image: jacketImage,
    category: 'Blazers',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Blazer com design minimalista e corte impecável. Peça versátil para looks profissionais e casuais.'
  }
];
