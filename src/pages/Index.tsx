import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroBackground from '@/assets/header.png';
import logo from '@/assets/logo2.png';

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-elegant text-center relative z-10">
          <img 
            src={logo} 
            alt="Liens" 
            className="h-16 lg:h-20 mx-auto mb-6 filter brightness-0 invert"
          />
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Criando laços desde 2023.
          </p>
          <Link to="/products" className="btn-primary inline-flex">
            Explorar Coleção
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container-elegant">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-muted-foreground">
              Peças cuidadosamente selecionadas para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
