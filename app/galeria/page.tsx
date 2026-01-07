import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { photos } from "@/data/dataFotos";
import "@/styles/Galeria.css";

export default function Home() {
  const fotos = photos.filter(foto => {return foto.main == true});
  return (
    <div className="page">
      <Header/>
      <div className="titulo">
        <h2>Exposicion</h2>
        <h1 className="titulo-lorural">Lo Rural</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima nam cum rem soluta odit architecto maiores facere aliquid molestiae? Cupiditate quia pariatur architecto dolorem omnis nesciunt vel porro maiores.</p>
      </div>
      <div className="galeria">
        {fotos.map((foto, index) => (
          <Link 
            key={foto.id} 
            href={`/galeria/${foto.id}`}
            className={`galeria-foto ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="texto">
              <h1>{foto.title}</h1>
              <p>{foto.description}</p>
            </div>
            <div className="galeria-foto-imagen">
              <img src={foto.imageUrl} alt={foto.title} />
            </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  );
}