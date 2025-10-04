import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product, useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();
  
  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao carrinho`,
    });
  };
  
  return (
    <div className="card-elegant bg-white">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
        
        <div className="p-6 sm:p-8 bg-white">
          <p className="text-muted-foreground text-xs sm:text-sm mb-2 uppercase tracking-widest">{product.category}</p>
          <h3 className="font-bold text-base sm:text-lg mb-4 uppercase tracking-wide">{product.name}</h3>
          
          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl font-black">
              R$ {product.price.toFixed(2)}
            </span>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart();
              }}
              className="bg-foreground text-background p-3 sm:p-4 rounded-sm hover:bg-foreground/90 transition-all duration-300 border-2 border-foreground hover:shadow-lg"
              aria-label={`Adicionar ${product.name} ao carrinho`}
            >
              <Plus size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;