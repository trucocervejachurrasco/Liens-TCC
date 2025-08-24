import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Products = () => {
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="container-elegant px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Liens Sport Club
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Coleção inspirada no esporte francês, unindo movimento, sofisticação e o estilo dinâmico da França.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
