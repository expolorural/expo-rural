import "@/styles/Polaroid.css";

type PolaroidProps = {
    url: string;
}

export default function Polaroid({url}: PolaroidProps   ) {
    return (
        <div className="item">
            <div className="polaroid">
                <img src={url} alt=""/>
            </div>
        </div>
    );
}