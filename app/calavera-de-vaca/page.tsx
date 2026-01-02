import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./style.css";

export default function Home() {
  return (
        <div className="page">
            <Header/>
            <h1>Calavera de Vaca</h1>
            <div className="contenido">
                <div className="texto">
                    Es muy usual encontrar colgadas en las paredes o en algún tronco una calavera de vaca o toro en las casas rurales. Existe la creencia de que este elemento funciona como un 'contra' para las malas intenciones o hechizo de quienes puedan llegar a la casa, tal como la cruz de parqui amarrada con lana roja o tener una planta de  ruda a la entrada de la casa
                </div>
                <div className="imagen">
                    <img src="calavera.png"></img> 
                </div>
            </div>

            <Footer/>
        </div>
  );
}
