import { Product } from '@/context/CartContext';
import tshirtImage from '@/assets/camisetapsg.jpg';
import tshirtFront from '@/assets/camisetapsg-front.jpg';
import tshirtBack from '@/assets/camisetapsg-back.jpg';
import bone from '@/assets/bone.jpg';
import boneFront from '@/assets/bone-front.jpg';
import boneBack from '@/assets/bone-back.jpg';
import dressImage from '@/assets/product-dress.jpg';
import dressFront from '@/assets/product-dress-front.jpg';
import dressBack from '@/assets/product-dress-back.jpg';
import jeansImage from '@/assets/product-jeans.jpg';
import jeansFront from '@/assets/product-jeans-front.jpg';
import jeansBack from '@/assets/product-jeans-back.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Creme Liens Sport Club',
    price: 95.99,
    image: tshirtImage,
    images: [tshirtFront, tshirtBack],
    category: 'Camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Camiseta premium em algodão macio com design exclusivo do Liens Sport Club. Perfeita para o dia a dia com estilo casual e conforto.'
  },
  {
    id: '2',
    name: 'Boné Liens Sport Club',
    price: 80.50,
    image: bone,
    images: [boneFront, boneBack],
    category: 'Bonés',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Boné inspirado no esporte francês, combinando conforto, leveza e o estilo esportivo-chic de Paris.'
  },
  {
    id: '3',
    name: 'Vestido Elegante',
    price: 199.90,
    image: dressImage,
    images: [dressFront, dressBack],
    category: 'Vestidos',
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    description: 'Vestido elegante com caimento perfeito. Ideal para ocasiões especiais ou eventos sociais.'
  },
  {
    id: '4',
    name: 'Calça Jeans Slim',
    price: 149.90,
    image: jeansImage,
    images: [jeansFront, jeansBack],
    category: 'Calças',
    sizes: ['36', '38', '40', '42', '44', '46'],
    description: 'Calça jeans com modelagem slim fit que valoriza a silhueta. Conforto e estilo em uma única peça.'
  },
  {
    id: '5',
    name: 'Camiseta Oversized',
    price: 79.90,
    image: tshirtImage,
    images: [tshirtFront, tshirtBack],
    category: 'Camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Camiseta com modelagem oversized para um visual despojado e moderno. Máximo conforto para o seu dia.'
  }
];
