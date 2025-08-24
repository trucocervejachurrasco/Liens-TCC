import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import logo from '@/assets/logo1.png';

const Navigation = () => {
  const location = useLocation();
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container-elegant py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src={logo} alt="Liens Co." className="h-8 sm:h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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

          {/* Mobile Menu Button & Cart */}
          <div className="flex md:hidden items-center space-x-4">
            <Link 
              to="/cart" 
              className={`nav-link ${isActive('/cart') ? 'nav-link-active' : ''} flex items-center space-x-1`}
            >
              <ShoppingBag size={20} />
              {state.items.length > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'nav-link-active' : ''} py-2`}
                onClick={closeMenu}
              >
                Início
              </Link>
              <Link 
                to="/products" 
                className={`nav-link ${isActive('/products') ? 'nav-link-active' : ''} py-2`}
                onClick={closeMenu}
              >
                Produtos
              </Link>
              <Link 
                to="/register" 
                className={`nav-link ${isActive('/register') ? 'nav-link-active' : ''} py-2`}
                onClick={closeMenu}
              >
                Cadastro
              </Link>
              <Link 
                to="/account" 
                className={`nav-link ${isActive('/account') ? 'nav-link-active' : ''} flex items-center space-x-2 py-2`}
                onClick={closeMenu}
              >
                <User size={18} />
                <span>Conta</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
