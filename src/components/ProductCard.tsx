import { Plus } from 'lucide-react';
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
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-medium text-lg mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{product.category}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">
            R$ {product.price.toFixed(2)}
          </span>
          
          <button 
            onClick={handleAddToCart}
            className="btn-primary p-3 rounded-full hover:bg-primary-hover transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;