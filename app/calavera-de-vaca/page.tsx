import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Titulo from "@/components/Titulo";

export default function Home() {
  return (
        <div className="page">
            <Header/>
            
            <img src="calavera.jpg"></img>
            
            <Footer/>
        </div>
  );
}
