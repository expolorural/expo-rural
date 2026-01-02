// app/galeria/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { photos } from '@/data/dataFotos';
import { Metadata } from 'next';
import Header from '@/components/Header';
import "./style.css";
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
  const photo = photos.find(p => p.id === parseInt(id));
  
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
  const photo = photos.find(p => p.id === photoId);

  // Si la foto no existe, muestra 404
  if (!photo) {
    notFound();
  }

  // Encuentra fotos anterior y siguiente
  const currentIndex = photos.findIndex(p => p.id === photoId);
  const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null;
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;

  return (
    <div className="page">
      {/* Header con navegación */}
      <Header/>

      <h1>{photo.title}</h1>
        <div className="contenido">
          <div className="texto">
            {photo.story}
          </div>
        <div className="imagen">
            <img src={photo.imageUrl}></img> 
        </div>
      </div>

      <Footer/>
    </div>
  );
}