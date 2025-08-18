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
      <div className="min-h-screen bg-background py-12">
        <div className="container-elegant">
          <div className="text-center py-20">
            <h1 className="text-3xl font-light tracking-tight mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-muted-foreground mb-8">
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
    <div className="min-h-screen bg-background py-12">
      <div className="container-elegant">
        <h1 className="text-3xl font-light tracking-tight mb-12 text-center">
          Carrinho de Compras
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-8">
            {state.items.map((item) => (
              <div key={item.id} className="card-elegant p-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-muted-foreground">{item.category}</p>
                    <p className="font-semibold mt-1">R$ {item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 rounded-md border border-input hover:bg-muted transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span className="w-12 text-center font-medium">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 rounded-md border border-input hover:bg-muted transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 rounded-md text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="card-elegant p-6 bg-muted/30">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-medium">Total:</span>
              <span className="text-2xl font-semibold">
                R$ {state.total.toFixed(2)}
              </span>
            </div>
            
            <Link to="/checkout" className="btn-primary w-full text-lg py-4">
              Finalizar Compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;