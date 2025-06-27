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
        <div id="footer-contact">
          Telefono: <span className="color-tlf">+58 412-456-7890</span>
        </div>

        <div className="footer-socials">
          
          <a
            href="https://www.instagram.com/pangofashion/"
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
