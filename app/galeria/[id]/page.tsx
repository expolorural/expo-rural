// app/galeria/[id]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { photos } from '@/data/dataFotos';
import { Metadata } from 'next';
import Header from '@/components/Header';
import "./fotos.css";
import Footer from '@/components/Footer';

// Genera las rutas estáticas en build time
export async function generateStaticParams() {
  return photos.map((photo) => ({
    id: photo.id.toString(),
  }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const { id } = await params;
  const photo = photos.find(p => p.id === parseInt(id) && p.main === true);
  
  if (!photo) {
    return {
      title: 'Foto no encontrada',
    };
  }
  
  return {
    title: `${photo.title} - Galería Fotográfica`,
    description: photo.description,
    openGraph: {
      title: photo.title,
      description: photo.description,
      images: [photo.imageUrl],
    },
  };
}

export default async function PhotoPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const photoId = parseInt(id);
  const photo = photos.find(p => p.id === photoId && p.main === true);
  const fotosSec = photos.filter(foto => foto.id === photoId && !foto.main);
  
  if (!photo) {
    notFound();
  }
  
  // Encuentra fotos anterior y siguiente (solo principales)
  const mainPhotos = photos.filter(p => p.main === true);
  const currentIndex = mainPhotos.findIndex(p => p.id === photoId);
  const prevPhoto = currentIndex > 0 ? mainPhotos[currentIndex - 1] : null;
  const nextPhoto = currentIndex < mainPhotos.length - 1 ? mainPhotos[currentIndex + 1] : null;
  
  return (
    <div className="page">
      <Header/>
      <h1>{photo.title}</h1>
      
      {/* Contenido principal */}
      <div className="contenido">
        <div className="texto">
          {photo.story}
          
          {/* Sección de precios */}
          {photo.venta && Object.keys(photo.venta).length > 0 && (
            <div className="precios-section">
              <h3 className="precios-titulo">Disponible para compra</h3>
              <div className="precios-grid">
                {Object.entries(photo.venta).map(([specs, precio]) => (
                  <div key={specs} className="precio-item">
                    <div className="precio-specs">{specs}</div>
                    <div className="precio-valor">{precio}</div>
                  </div>
                ))}
              </div>
              <p className='precios-contacto'>Comunicarse al +56 9 7652 2755</p>
            </div>
          )}
        </div>
        
        <div className="imagen">
          <img src={photo.imageUrl} alt={photo.title} /> 
        </div>
      </div>
      
      {/* Galería de fotos secundarias */}
      {fotosSec.length > 0 && (
        <div className="fotos-secundarias-section">
          <h2 className="fotos-secundarias-titulo">Más de esta serie</h2>
          <div className="fotos-secundarias-grid">
            {fotosSec.map((fotoSec) => (
              <div key={fotoSec.imageUrl} className="foto-secundaria">
                <img 
                  src={fotoSec.imageUrl} 
                  alt={fotoSec.title || photo.title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Navegación entre fotos */}
      <div className="navigation">
        {prevPhoto ? (
          <Link href={`/galeria/${prevPhoto.id}`} className="nav-button">
            ← Anterior
          </Link>
        ) : (
          <div className="nav-button disabled">← Anterior</div>
        )}
        {nextPhoto ? (
          <Link href={`/galeria/${nextPhoto.id}`} className="nav-button">
            Siguiente →
          </Link>
        ) : (
          <div className="nav-button disabled">Siguiente →</div>
        )}
      </div>
      
      <Footer/>
    </div>
  );
}