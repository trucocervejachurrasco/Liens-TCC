import { useState } from 'react';
import { User, Mail, MapPin, Edit2, Save, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    address: 'Rua das Flores, 123',
    city: 'São Paulo',
    zipCode: '01234-567'
  });
  
  const [editData, setEditData] = useState(userData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(userData);
  };

  const handleSave = () => {
    setUserData(editData);
    setIsEditing(false);
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(userData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container-elegant py-12">
      <div className="max-w-2xl mx-auto">
        <div className="card-elegant p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Minha Conta</h1>
                <p className="text-muted-foreground">Gerencie suas informações pessoais</p>
              </div>
            </div>
            
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="btn-secondary flex items-center space-x-2"
              >
                <Edit2 size={16} />
                <span>Editar</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save size={16} />
                  <span>Salvar</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <X size={16} />
                  <span>Cancelar</span>
                </button>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center space-x-2">
                  <User size={16} />
                  <span>Nome completo</span>
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                    className="input-elegant"
                  />
                ) : (
                  <p className="text-foreground bg-muted p-3 rounded-lg">{userData.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center space-x-2">
                  <Mail size={16} />
                  <span>E-mail</span>
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    className="input-elegant"
                  />
                ) : (
                  <p className="text-foreground bg-muted p-3 rounded-lg">{userData.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center space-x-2">
                <MapPin size={16} />
                <span>Endereço</span>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={editData.address}
                  onChange={handleChange}
                  className="input-elegant"
                />
              ) : (
                <p className="text-foreground bg-muted p-3 rounded-lg">{userData.address}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Cidade</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={editData.city}
                    onChange={handleChange}
                    className="input-elegant"
                  />
                ) : (
                  <p className="text-foreground bg-muted p-3 rounded-lg">{userData.city}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">CEP</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="zipCode"
                    value={editData.zipCode}
                    onChange={handleChange}
                    className="input-elegant"
                  />
                ) : (
                  <p className="text-foreground bg-muted p-3 rounded-lg">{userData.zipCode}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Histórico de Pedidos</h3>
            <div className="text-center py-8 text-muted-foreground">
              <p>Você ainda não fez nenhum pedido.</p>
              <p className="text-sm mt-2">Quando fizer suas primeiras compras, elas aparecerão aqui.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;