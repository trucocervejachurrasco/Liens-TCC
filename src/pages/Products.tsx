import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Products = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-elegant">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight mb-4">
            Nossa Coleção
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra peças únicas e atemporais, criadas com atenção aos detalhes 
            e materiais de alta qualidade
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