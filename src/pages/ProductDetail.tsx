import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { dispatch } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Produto não encontrado</h1>
          <Link to="/products" className="btn-primary inline-block">
            Voltar aos produtos
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha um tamanho antes de adicionar ao carrinho",
        variant: "destructive"
      });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      dispatch({ 
        type: 'ADD_ITEM', 
        payload: { ...product, selectedSize } 
      });
    }

    toast({
      title: "Produto adicionado",
      description: `${quantity}x ${product.name} (${selectedSize}) foi adicionado ao carrinho`,
    });
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background py-6 sm:py-8">
      <div className="container-elegant px-4">
        {/* Back button */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          Voltar aos produtos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Product Images Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {product.images && product.images.length > 0 ? (
                  product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square overflow-hidden rounded-xl bg-muted cursor-zoom-in">
                        <img
                          src={image}
                          alt={`${product.name} - Visão ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </CarouselItem>
                  ))
                ) : (
                  <CarouselItem>
                    <div className="aspect-square overflow-hidden rounded-xl bg-muted cursor-zoom-in">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
              {product.images && product.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </div>

          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-muted-foreground text-xs sm:text-sm mb-2">{product.category}</p>
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight mb-3 sm:mb-4">{product.name}</h1>
              <p className="text-2xl sm:text-3xl font-semibold text-primary mb-4 sm:mb-6">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <h3 className="font-medium mb-3 text-sm sm:text-base">Tamanho</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 sm:px-4 border rounded-lg font-medium transition-all text-sm sm:text-base ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-input hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div>
              <h3 className="font-medium mb-3 text-sm sm:text-base">Quantidade</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="h-8 w-8 sm:h-10 sm:w-10"
                >
                  <Minus size={14} className="sm:w-4 sm:h-4" />
                </Button>
                <span className="text-base sm:text-lg font-medium w-10 sm:w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                  className="h-8 w-8 sm:h-10 sm:w-10"
                >
                  <Plus size={14} className="sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full h-10 sm:h-12 text-sm sm:text-base font-medium"
              size="lg"
            >
              <ShoppingCart size={16} className="sm:w-5 sm:h-5 mr-2" />
              Adicionar ao carrinho
            </Button>

            {/* Product Features */}
            <div className="border-t pt-4 sm:pt-6 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material:</span>
                  <span>100% Algodão</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cuidados:</span>
                  <span>Lavar à máquina</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Origem:</span>
                  <span>Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;