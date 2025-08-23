import { Product } from '@/context/CartContext';
import tshirtImage from '@/assets/camisetapsg.jpg';
import tshirtFront from '@/assets/camisetapsg-front.jpg';
import tshirtBack from '@/assets/camisetapsgverso.jpg';
import bone from '@/assets/bone.jpg';
import boneFront from '@/assets/bone-front.jpg';
import boneBack from '@/assets/bone-back.jpg';
import nascidoparavencer from '@/assets/camisetadoue.jpg';
import nascidoparavencer2 from '@/assets/camisetadoueverso.jpg';
import jeansImage from '@/assets/product-jeans.jpg';
import jeansFront from '@/assets/product-jeans-front.jpg';
import jeansBack from '@/assets/product-jeans-back.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Creme Liens Sport Club',
    price: 95.99,
    image: tshirtImage,
    images: [tshirtImage, tshirtBack],
    category: 'Camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Camiseta premium em algodão macio com design exclusivo do Liens Sport Club. Perfeita para o dia a dia com estilo casual e conforto.'
  },
  {
    id: '2',
    name: 'Boné Liens Sport Club',
    price: 80.50,
    image: bone,
    images: [bone, boneBack],
    category: 'Bonés',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Boné inspirado no esporte francês, combinando conforto, leveza e o estilo esportivo-chic de Paris.'
  },
  {
    id: '3',
    name: 'Camiseta Preta Nascido Para Vencer',
    price: 109.99,
    image: nascidoparavencer,
    images: [nascidoparavencer, nascidoparavencer2],
    category: 'Camisetas',
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    description: 'Camiseta premium com estampa exclusiva nas costas, celebrando a conquista histórica do PSG na Champions 2025. Um design que une esporte, estilo e a sofisticação francesa em cada detalhe.'
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
