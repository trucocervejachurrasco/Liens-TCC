import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, MapPin, Edit2, Save, X, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface UserProfile {
  id: string;
  name: string;
  address: string | null;
  city: string | null;
  zip_code: string | null;
}

const Account = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [editData, setEditData] = useState<UserProfile | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        navigate('/auth');
        return;
      }

      setUserEmail(session.user.email || '');

      // Fetch user profile
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar o perfil",
          variant: "destructive"
        });
      } else if (profileData) {
        setProfile(profileData);
        setEditData(profileData);
      }
    } catch (error) {
      console.error('Error in checkUser:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso",
      });
      
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Erro ao fazer logout",
        variant: "destructive"
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profile);
  };

  const handleSave = async () => {
    if (!editData || !profile) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name: editData.name,
          address: editData.address,
          city: editData.city,
          zip_code: editData.zip_code
        })
        .eq('id', profile.id);

      if (error) throw error;

      setProfile(editData);
      setIsEditing(false);
      
      toast({
        title: "Perfil atualizado",
        description: "Suas informações foram salvas com sucesso",
      });
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Erro ao salvar perfil",
        variant: "destructive"
      });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(profile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editData) return;
    
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Perfil não encontrado</p>
          <Button onClick={() => navigate('/auth')}>Fazer Login</Button>
        </div>
      </div>
    );
  }

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
            
            <div className="flex space-x-2">
              {!isEditing ? (
                <>
                  <Button
                    onClick={handleEdit}
                    variant="outline"
                    size="sm"
                  >
                    <Edit2 size={16} className="mr-2" />
                    Editar
                  </Button>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleSave}
                    size="sm"
                  >
                    <Save size={16} className="mr-2" />
                    Salvar
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    size="sm"
                  >
                    <X size={16} className="mr-2" />
                    Cancelar
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center space-x-2">
                  <User size={16} />
                  <span>Nome completo</span>
                </label>
                {isEditing ? (
                  <Input
                    type="text"
                    name="name"
                    value={editData?.name || ''}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="text-foreground bg-muted p-3 rounded-lg">{profile.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center space-x-2">
                  <Mail size={16} />
                  <span>E-mail</span>
                </label>
                <p className="text-foreground bg-muted p-3 rounded-lg">{userEmail}</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center space-x-2">
                <MapPin size={16} />
                <span>Endereço</span>
              </label>
              {isEditing ? (
                <Input
                  type="text"
                  name="address"
                  value={editData?.address || ''}
                  onChange={handleChange}
                  placeholder="Seu endereço"
                />
              ) : (
                <p className="text-foreground bg-muted p-3 rounded-lg">
                  {profile.address || 'Não informado'}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Cidade</label>
                {isEditing ? (
                  <Input
                    type="text"
                    name="city"
                    value={editData?.city || ''}
                    onChange={handleChange}
                    placeholder="Sua cidade"
                  />
                ) : (
                  <p className="text-foreground bg-muted p-3 rounded-lg">
                    {profile.city || 'Não informado'}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">CEP</label>
                {isEditing ? (
                  <Input
                    type="text"
                    name="zip_code"
                    value={editData?.zip_code || ''}
                    onChange={handleChange}
                    placeholder="00000-000"
                  />
                ) : (
                  <p className="text-foreground bg-muted p-3 rounded-lg">
                    {profile.zip_code || 'Não informado'}
                  </p>
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