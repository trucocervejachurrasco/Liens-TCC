import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    zipCode: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Cadastro realizado!",
      description: "Sua conta foi criada com sucesso"
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      city: '',
      zipCode: ''
    });
  };
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container-elegant">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light tracking-tight mb-4">
              Criar Conta
            </h1>
            <p className="text-muted-foreground">
              Junte-se à nossa comunidade
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-elegant w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-elegant w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-elegant w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirmar senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-elegant w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-2">
                Endereço
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-elegant w-full"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-2">
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="input-elegant w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                  CEP
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="input-elegant w-full"
                  placeholder="00000-000"
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Criar Conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;