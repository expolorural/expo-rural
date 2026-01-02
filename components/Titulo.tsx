import "./../styles/Main.css"
import Polaroid from "./Polaroid";

export default function Main() {
    return (
        <main>
            <div className="titulo-div">
                <div className="titulo-texto">
                    <h1>
                        Pamela Valentina
                    </h1>
                    Soy una fotografa
                </div>
                <div className="wrapper">
                    <Polaroid url="/vale.png"/>
                </div>
            </div>
        </main>
    );
}