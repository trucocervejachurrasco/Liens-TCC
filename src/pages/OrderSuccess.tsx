import { Link } from 'react-router-dom';
import { CheckCircle, Package, Mail } from 'lucide-react';

const OrderSuccess = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-elegant">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="mx-auto mb-6 text-primary" size={80} />
            <h1 className="text-4xl font-light tracking-tight mb-4">
              Pedido Realizado!
            </h1>
            <p className="text-xl text-muted-foreground">
              Obrigado pela sua compra. Seu pedido foi processado com sucesso.
            </p>
          </div>
          
          <div className="card-elegant p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Package className="mx-auto mb-3 text-primary" size={32} />
                <h3 className="font-medium mb-2">Número do Pedido</h3>
                <p className="text-muted-foreground font-mono">#{orderNumber}</p>
              </div>
              
              <div>
                <Mail className="mx-auto mb-3 text-primary" size={32} />
                <h3 className="font-medium mb-2">Confirmação</h3>
                <p className="text-muted-foreground">E-mail enviado</p>
              </div>
              
              <div>
                <CheckCircle className="mx-auto mb-3 text-primary" size={32} />
                <h3 className="font-medium mb-2">Status</h3>
                <p className="text-muted-foreground">Confirmado</p>
              </div>
            </div>
          </div>
          
          <div className="bg-accent p-6 rounded-lg mb-8">
            <h3 className="font-medium mb-2">Próximos passos</h3>
            <p className="text-sm text-accent-foreground">
              Você receberá um e-mail de confirmação com os detalhes do seu pedido 
              e informações de rastreamento assim que o produto for despachado.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/products" className="btn-primary inline-flex">
              Continuar Comprando
            </Link>
            <br />
            <Link to="/" className="btn-secondary inline-flex">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;