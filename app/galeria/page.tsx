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
        <p>Las imágenes que componen esta muestra son fragmentos de instantes con los que tuve complicidad en alguno de mis bagajes maulinos. </p> 
        <p>Estas imágenes han sido capturadas en un lapso de tiempo cercano a los últimos diez años o incluso más, en diversidad de contextos, como paseos familiares, escapadas con amigos, trabajos u otros, y están muy lejos de intentar hacer un ensayo visual etnográfico de la Región del Maule, son más bien parte de mi historia y de mis vivencias, que imagino que se parecen a las de muchos maulinos.</p>
        <p>En ellas puedo ver el reflejo de la soledad amiga, de la conservación de lo de antes, del apego a lo elemental, del descubrir infantil de la naturaleza y de la anhelada calma.</p>
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