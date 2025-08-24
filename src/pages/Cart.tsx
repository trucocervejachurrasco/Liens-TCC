import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useCart();
  
  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8 sm:py-12">
        <div className="container-elegant px-4">
          <div className="text-center py-12 sm:py-20">
            <h1 className="text-2xl sm:text-3xl font-light tracking-tight mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
              Que tal explorar nossa coleção?
            </p>
            <Link to="/products" className="btn-primary">
              Explorar Produtos
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="container-elegant px-4">
        <h1 className="text-2xl sm:text-3xl font-light tracking-tight mb-8 sm:mb-12 text-center">
          Carrinho de Compras
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            {state.items.map((item) => (
              <div key={item.id} className="card-elegant p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-base sm:text-lg truncate">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">{item.category}</p>
                      <p className="font-semibold mt-1 text-sm sm:text-base">R$ {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 sm:p-2 rounded-md border border-input hover:bg-muted transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus size={14} className="sm:w-4 sm:h-4" />
                      </button>
                      
                      <span className="w-8 sm:w-12 text-center font-medium text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 sm:p-2 rounded-md border border-input hover:bg-muted transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus size={14} className="sm:w-4 sm:h-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 sm:p-2 rounded-md text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Remover item"
                    >
                      <Trash2 size={16} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="card-elegant p-4 sm:p-6 bg-muted/30">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl font-medium">Total:</span>
              <span className="text-xl sm:text-2xl font-semibold">
                R$ {state.total.toFixed(2)}
              </span>
            </div>
            
            <Link to="/checkout" className="btn-primary w-full text-base sm:text-lg py-3 sm:py-4">
              Finalizar Compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;