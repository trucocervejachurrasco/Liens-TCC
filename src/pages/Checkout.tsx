import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { CreditCard, Truck, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    // Dados de entrega
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Dados de pagamento
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Método de pagamento
    paymentMethod: 'credit'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simular processamento do pedido
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Limpar carrinho
    dispatch({ type: 'CLEAR_CART' });
    
    toast({
      title: "Pedido realizado com sucesso!",
      description: "Você receberá um e-mail com os detalhes do pedido",
    });
    
    // Redirecionar para página de sucesso
    navigate('/order-success');
    setIsProcessing(false);
  };
  
  if (state.items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-elegant">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-light tracking-tight mb-12 text-center">
            Finalizar Compra
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados de Entrega */}
                <div className="card-elegant p-6">
                  <div className="flex items-center mb-6">
                    <Truck className="mr-3 text-primary" size={20} />
                    <h2 className="text-xl font-medium">Dados de Entrega</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Nome completo</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="input-elegant w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-elegant w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-elegant w-full"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Endereço</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="input-elegant w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Cidade</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="input-elegant w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Estado</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="input-elegant w-full"
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="ES">Espírito Santo</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">CEP</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="input-elegant w-full"
                        placeholder="00000-000"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Dados de Pagamento */}
                <div className="card-elegant p-6">
                  <div className="flex items-center mb-6">
                    <CreditCard className="mr-3 text-primary" size={20} />
                    <h2 className="text-xl font-medium">Dados de Pagamento</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Método de pagamento</label>
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        className="input-elegant w-full"
                        required
                      >
                        <option value="credit">Cartão de Crédito</option>
                        <option value="debit">Cartão de Débito</option>
                        <option value="pix">PIX</option>
                      </select>
                    </div>
                    
                    {(formData.paymentMethod === 'credit' || formData.paymentMethod === 'debit') && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">Número do cartão</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="input-elegant w-full"
                            placeholder="0000 0000 0000 0000"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Nome no cartão</label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            className="input-elegant w-full"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Validade</label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleChange}
                              className="input-elegant w-full"
                              placeholder="MM/AA"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">CVV</label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleChange}
                              className="input-elegant w-full"
                              placeholder="000"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}
                    
                    {formData.paymentMethod === 'pix' && (
                      <div className="bg-accent p-4 rounded-lg">
                        <p className="text-sm text-accent-foreground">
                          Após finalizar o pedido, você receberá o código PIX para pagamento
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processando...' : 'Concluir Pedido'}
                </button>
              </form>
            </div>
            
            {/* Resumo do Pedido */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="card-elegant p-6">
                <h2 className="text-xl font-medium mb-6">Resumo do Pedido</h2>
                
                <div className="space-y-4 mb-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Qtd: {item.quantity}
                        </p>
                      </div>
                      
                      <span className="font-medium">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>R$ {state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete:</span>
                    <span>Grátis</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                    <span>Total:</span>
                    <span>R$ {state.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;