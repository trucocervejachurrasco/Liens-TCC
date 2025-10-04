import { Product, ProductColor } from '@/context/CartContext';
import tshirtImage from '@/assets/camisetapsg.jpg';
import tshirtFront from '@/assets/camisetapsg-front.jpg';
import tshirtBack from '@/assets/camisetapsgverso.jpg';
import psgpreta from '@/assets/camisetapsgpreta.jpg';
import psgpretaverso from '@/assets/camisetapsgpretaverso.jpg';
import bone from '@/assets/bone.jpg';
import boneFront from '@/assets/bone-front.jpg';
import boneBack from '@/assets/bone-back.jpg';
import nascidoparavencer from '@/assets/camisetadoue.jpg';
import nascidoparavencer2 from '@/assets/camisetadoueverso.jpg';
import nascidoparavencerbranco from '@/assets/camisetadouebranca.jpg';
import nascidoparavencerbranco2 from '@/assets/camisetadouebrancaverso.jpg';
import jaqueta from '@/assets/jaqueta.jpg';
import jaquetaverso from '@/assets/jaquetaverso.jpg';
import polo from '@/assets/polo.jpg';
import poloverso from '@/assets/poloverso.jpg';
import short from '@/assets/shortfrente.jpg';
import short2 from '@/assets/short2.jpg';
import shortverso from '@/assets/shortverso.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Liens Sport Club',
    price: 95.99,
    image: tshirtImage,
    images: [tshirtImage, tshirtBack],
    colors: [
      {
        name: 'Creme',
        value: '#F5F5DC',
        images: [tshirtImage, tshirtBack]
      },
      {
        name: 'Preto',
        value: '#000000',
        images: [psgpreta, psgpretaverso]
      },
    ],
    category: 'Camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Camiseta premium em algodão macio com design exclusivo do Liens Sport Club. Perfeita para o dia a dia com estilo casual e conforto.'
  },
  {
    id: '2',
    name: 'Camiseta Nascido Para Vencer',
    price: 109.99,
    image: nascidoparavencer,
    images: [nascidoparavencer, nascidoparavencer2],
    colors: [
      {
        name: 'Preto',
        value: '#000000',
        images: [nascidoparavencer, nascidoparavencer2]
      },
      {
        name: 'Branco',
        value: '#FFFFFF',
        images: [nascidoparavencerbranco, nascidoparavencerbranco2]
      },
    ],
    category: 'Camisetas',
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    description: 'Camiseta premium com estampa exclusiva nas costas, celebrando a conquista histórica do PSG na Champions 2025. Um design que une esporte, estilo e a sofisticação francesa em cada detalhe.'
  },
  {
    id: '3',
    name: 'Camisa Polo Tenis Liens',
    price: 129.90,
    image: polo,
    images: [polo, poloverso],
    colors: [
      {
        name: 'Branco',
        value: '#FFFFFF',
        images: [polo, poloverso]
      },
      {
        name: 'Preto',
        value: '#000000',
        images: [polo, poloverso]
      },
      {
        name: 'Azul',
        value: '#2563eb',
        images: [polo, poloverso]
      }
    ],
    category: 'Camisetas',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Camiseta polo branca inspirada no esporte francês, feita para o tênis. Une elegância clássica, leveza e a sofisticação esportiva de Paris, refletindo o equilíbrio entre performance e estilo.'
  },
  {
    id: '4',
    name: 'Boné Liens Sport Club',
    price: 80.50,
    image: bone,
    images: [bone, boneBack],
    category: 'Bonés',
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Boné inspirado no esporte francês, combinando conforto, leveza e o estilo esportivo-chic de Paris.'
  },
  {
    id: '5',
    name: 'Short Liens Mapa de Calor',
    price: 109.90,
    image: short,
    images: [short, shortverso],
    category: 'Shorts',
    sizes: ['P', 'M', 'G'],
    description: 'Short esportivo com estampa termal, inspirado no dinamismo do esporte francês. Une conforto, performance e estilo contemporâneo, refletindo a energia autêntica das ruas e quadras de Paris.'
  },
  {
    id: '6',
    name: 'Short Liens Sport Club',
    price: 99.99,
    image: short2,
    images: [short2, shortverso],
    category: 'Shorts',
    sizes: ['P', 'M', 'G'],
    description: 'Short minimalista com o emblema da Liens Sport Club. Representa a essência do streetwear parisiense, unindo praticidade e sofisticação esportiva em uma peça versátil e icônica.'
  }
];
