import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Products = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-elegant">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight mb-4">
            Liens Sport Club
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Coleção inspirada no esporte francês, unindo movimento, sofisticação e o estilo dinâmico da França.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
