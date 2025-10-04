import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroBackground from '@/assets/header.jpg';
import logo from '@/assets/logo2.png';

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-elegant text-center relative z-10 px-4">
          <img 
            src={logo} 
            alt="Liens" 
            className="h-12 sm:h-16 lg:h-20 mx-auto mb-4 sm:mb-6 filter brightness-0 invert"
          />
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Criando laços desde 2023.
          </p>
          <Link to="/products" className="btn-primary inline-flex text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3">
            Explorar Coleção
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-elegant px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Peças cuidadosamente selecionadas para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/products" className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3">
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
