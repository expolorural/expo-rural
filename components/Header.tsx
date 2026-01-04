import "./../styles/Header.css"

export default function Header() {
    return (
        <header>
            <div className="a-div">
                <a href={`/galeria`}>Blog</a>
            </div>
            <div className="a-div">
                <a>Lo Rural</a>
            </div>
        </header>
    );
}