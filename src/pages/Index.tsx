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
        className="relative py-32 sm:py-40 lg:py-48 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-elegant text-center relative z-10 px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
            LIENS SPORT CLUB
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Sportswear sofisticado para você
          </p>
          <Link to="/products" className="btn-primary inline-flex bg-white text-foreground border-white hover:bg-white/90">
            Descobrir
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted">
        <div className="container-elegant px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6">
              Coleção
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base uppercase tracking-widest">
              Peças selecionadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12 sm:mt-16">
            <Link to="/products" className="btn-secondary">
              Ver Todos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
