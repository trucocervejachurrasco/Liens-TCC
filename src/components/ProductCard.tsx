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
    <div className="card-elegant p-0 overflow-hidden group">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="font-medium text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{product.category}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg sm:text-xl font-semibold">
              R$ {product.price.toFixed(2)}
            </span>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart();
              }}
              className="btn-primary p-2 sm:p-3 rounded-full hover:bg-primary-hover transition-colors"
              aria-label={`Adicionar ${product.name} ao carrinho`}
            >
              <Plus size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;