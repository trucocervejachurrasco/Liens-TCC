import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Package, Calendar, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface OrderItem {
  id: string;
  product_name: string;
  product_image: string;
  price: number;
  quantity: number;
  selected_size?: string;
  selected_color?: string;
}

interface Order {
  id: string;
  order_number: string;
  total_amount: number;
  status: string;
  payment_method: string;
  created_at: string;
  order_items: OrderItem[];
}

interface OrderHistoryProps {
  userId: string;
}

const OrderHistory = ({ userId }: OrderHistoryProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, [userId]);

  const fetchOrders = async () => {
    try {
      const { data: ordersData, error } = await supabase
        .from('orders')
        .select(`
          id,
          order_number,
          total_amount,
          status,
          payment_method,
          created_at,
          order_items (
            id,
            product_name,
            product_image,
            price,
            quantity,
            selected_size,
            selected_color
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setOrders(ordersData || []);
    } catch (error: any) {
      console.error('Error fetching orders:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar histórico de pedidos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'pending':
        return 'Pendente';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case 'credit':
        return 'Cartão de Crédito';
      case 'debit':
        return 'Cartão de Débito';
      case 'pix':
        return 'PIX';
      default:
        return method;
    }
  };

  if (loading) {
    return (
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold mb-4">Histórico de Pedidos</h3>
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando pedidos...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold mb-4">Histórico de Pedidos</h3>
        <div className="text-center py-8 text-muted-foreground">
          <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Você ainda não fez nenhum pedido.</p>
          <p className="text-sm mt-2">Quando fizer suas primeiras compras, elas aparecerão aqui.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 pt-6 border-t border-border">
      <h3 className="text-lg font-semibold mb-4">Histórico de Pedidos</h3>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-muted/50 rounded-lg p-4 border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <div>
                  <h4 className="font-medium">Pedido #{order.order_number}</h4>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {format(new Date(order.created_at), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:items-end space-y-2">
                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {getStatusText(order.status)}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CreditCard className="w-4 h-4 mr-1" />
                  {getPaymentMethodText(order.payment_method)}
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {order.order_items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 text-sm">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-background">
                    <img 
                      src={item.product_image} 
                      alt={item.product_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.product_name}</p>
                    <div className="text-muted-foreground">
                      Qtd: {item.quantity}
                      {item.selected_size && ` • Tamanho: ${item.selected_size}`}
                      {item.selected_color && ` • Cor: ${item.selected_color}`}
                    </div>
                  </div>
                  <span className="font-medium">R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-border">
              <span className="text-sm text-muted-foreground">Total do pedido:</span>
              <span className="text-lg font-semibold">R$ {order.total_amount.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;