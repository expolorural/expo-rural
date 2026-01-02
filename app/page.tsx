import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Titulo";

export default function Home() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
