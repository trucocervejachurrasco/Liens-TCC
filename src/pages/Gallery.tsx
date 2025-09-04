import { useState } from 'react';
import { X } from 'lucide-react';

// Importar as imagens existentes para a galeria
import heroBackground from '@/assets/hero-background.jpg';
import header from '@/assets/header.jpg';
import camisetaLiens from '@/assets/camisetadoue.jpg';
import camisetaPsg from '@/assets/camisetapsg.jpg';
import jaqueta from '@/assets/jaqueta.jpg';
import polo from '@/assets/polo.jpg';
import bone from '@/assets/bone.jpg';
import short from '@/assets/short2.jpg';
import imagem1 from '@/assets/galeria1.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: imagem1,
      alt: 'Roland Garros',
      title: 'Liens Company'
    },
    {
      id: 2,
      src: header,
      alt: 'Estilo e Elegância da França',
      title: 'Elegância Urbana'
    },
    {
      id: 3,
      src: camisetaLiens,
      alt: 'Camiseta Liens Collection',
      title: 'Camiseta Liens'
    },
    {
      id: 4,
      src: camisetaPsg,
      alt: 'Camiseta PSG Champions 2025',
      title: 'PSG Champions Collection'
    },
    {
      id: 5,
      src: jaqueta,
      alt: 'Jaqueta Esportiva Premium',
      title: 'Jaqueta Esportiva'
    },
    {
      id: 6,
      src: polo,
      alt: 'Polo Tênis Elegante',
      title: 'Polo Tênis'
    },
    {
      id: 7,
      src: bone,
      alt: 'Boné Sport Club',
      title: 'Boné Sport Club'
    },
    {
      id: 8,
      src: short,
      alt: 'Short Mapa de Calor',
      title: 'Short Collection'
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="container-elegant px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Galeria
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Explore a inspiração por trás da coleção Liens Sport Club. Cada imagem conta a história do esporte francês, unindo movimento, sofisticação e estilo.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 break-inside-avoid mb-4 sm:mb-6"
              onClick={() => openModal(image.src)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-medium text-sm sm:text-base">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para visualização em tela cheia */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Fechar modal"
              >
                <X size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
