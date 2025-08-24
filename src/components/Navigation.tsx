import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import logo from '@/assets/logo1.png';

const Navigation = () => {
  const location = useLocation();
  const { state } = useCart();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b border-border bg-background">
      <div className="container-elegant py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Liens Co." className="h-10 w-auto" />
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            >
              Início
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${isActive('/products') ? 'nav-link-active' : ''}`}
            >
              Produtos
            </Link>
            <Link 
              to="/register" 
              className={`nav-link ${isActive('/register') ? 'nav-link-active' : ''}`}
            >
              Cadastro
            </Link>
            <Link 
              to="/account" 
              className={`nav-link ${isActive('/account') ? 'nav-link-active' : ''} flex items-center space-x-1`}
            >
              <User size={18} />
            </Link>
            <Link 
              to="/cart" 
              className={`nav-link ${isActive('/cart') ? 'nav-link-active' : ''} flex items-center space-x-1`}
            >
              <ShoppingBag size={18} />
              {state.items.length > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
