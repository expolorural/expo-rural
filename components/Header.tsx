"use client";

import { useState } from "react";
import Link from "next/link";
import "./../styles/Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <Link href="/galeria" className="logo">
                <img src="/Logo.png"/>
                PameVale
            </Link>

            <div 
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={isMenuOpen ? 'open' : ''}>
                <Link 
                    href="/galeria" 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Inicio
                </Link>
                <Link 
                    href="/galeria" 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Galería
                </Link>
                <Link 
                    href="/galeria" 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Sobre Mí
                </Link>
                <Link 
                    href="/galeria" 
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contacto
                </Link>
            </nav>
        </header>
    );
}