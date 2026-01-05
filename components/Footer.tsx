import "./../styles/Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                {/* Sección de marca */}
                <div className="footer-brand">
                    
                    <h2 className="footer-logo">PameVale</h2>
                </div>

                {/* Sección de contacto */}
                <div className="footer-contact">
                    <h3 className="footer-section-title">Contacto</h3>
                    <div className="contact-item">
                        <span className="contact-icon">📧</span>
                        <a href="mailto:pamelarodher@gmail.com" className="contact-link">
                            pamelarodher@gmail.com
                        </a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📱</span>
                        <a href="tel:+56912345678" className="contact-link">
                            +56 9 7652 2755 
                        </a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <span>Talca, Chile</span>
                    </div>
                </div>

                {/* Sección de redes sociales */}
                <div className="footer-social">
                    <h3 className="footer-section-title">Sígueme</h3>
                    <div className="social-links">
                        <a 
                            href="https://www.instagram.com/hojaporojo/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-link"
                            aria-label="Instagram"
                        >
                            📷
                        </a>
                    </div>
                </div>
            </div>

            {/* Línea divisora */}
            <div className="footer-divider"></div>

            {/* Copyright */}
            <div className="footer-bottom">
            </div>
        </footer>
    );
}