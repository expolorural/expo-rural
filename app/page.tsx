import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Titulo from "@/components/Titulo";
import { photos } from "@/data/dataFotos";
import "./style.css";

export default function Home() {
  return (
    <div className="page">
      <Header/>
      <Titulo/>

      <div className="galeria">
        {photos.map((foto, index) => (
          <Link 
            key={foto.id} 
            href={`/galeria/${foto.id}`}
            className={`galeria-foto ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="texto">
              <h1>{foto.title}</h1>
              <p>{foto.description}</p>
            </div>
            <img src={foto.imageUrl} />
          </Link>
        ))}
      </div>

      <Footer/>
    </div>
  );
}
