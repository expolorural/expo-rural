import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { photos } from "@/data/dataFotos";
import styles from "./style.module.css";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const fotos = photos.filter(foto => foto.main === true);

  return (
    <div className={styles.page}>
      <Header/>

      <div className={styles.titulo}>
        <h2>Exposición</h2>
        <h1 className={styles["titulo-lorural"]}>Lo Rural</h1>

        <p>
          Las imágenes que componen esta muestra son fragmentos de instantes con los que tuve complicidad en alguno de mis bagajes maulinos.
        </p>
        <p>
          Estas imágenes han sido capturadas en un lapso de tiempo cercano a los últimos diez años o incluso más, en diversidad de contextos,
          como paseos familiares, escapadas con amigos, trabajos u otros, y están muy lejos de intentar hacer un ensayo visual etnográfico de
          la Región del Maule, son más bien parte de mi historia y de mis vivencias, que imagino que se parecen a las de muchos maulinos.
        </p>
        <p>
          En ellas puedo ver el reflejo de la soledad amiga, de la conservación de lo de antes, del apego a lo elemental,
          del descubrir infantil de la naturaleza y de la anhelada calma.
        </p>
      </div>

      <div className={styles.galeria}>
        {fotos.map((foto) => (
          <Link
            key={foto.id}
            href={`/galeria/${foto.id}`}
            className={styles["galeria-foto"]}
          >
            <div className={styles["galeria-foto-imagen"]}>
              <Image
                src={foto.imageUrl}
                alt={foto.title}
                width={600}
                height={800}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className={styles.texto}>
              <h1>{foto.title}</h1>
            </div>
          </Link>
        ))}
      </div>

      <Footer/>
      <Analytics/>
    </div>
  );
}