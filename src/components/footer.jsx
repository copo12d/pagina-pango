import React from "react";
import '../App.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          PangoStudios CA © {new Date().getFullYear()}
        </div>

        <div className="footer-links">
          <a href="/about">Acerca</a>
          <a href="/services">Servicios</a>
          <a href="">Contacto</a>
          <a href="/privacy">Privacidad</a>
        </div>

        <div className="footer-socials">
          <a
            href=""
            className="social-icon facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          />
          <a
            href=""
            className="social-icon twitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          />
          <a
            href=""
            className="social-icon instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          />
        </div>
      </div>
    </footer>
  );
}
