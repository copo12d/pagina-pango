import '../Hero.css';
import { LogoPango } from './LogoPango';
import nube_arriba from '../assets/nube-arrba.svg';
import nube_abajo_izq from '../assets/nube-abajo-izq.svg';
import nube_abajo_derecha from '../assets/nube-abj-derec.svg';
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo-title">
            <LogoPango />
          <h3 className="studio-name">PANGO STUDIO</h3>
        </div>
        <h1 className="hero-title">PANGO <br /> FASHION</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='hero-circle'></div>

      {/* Espacios para las 3 nubes */}
      <img src={nube_arriba} alt="Nube superior" className="nube nube-top" />
      <img src={nube_abajo_izq} alt="Nube inferior izquierda" className="nube nube-bottom-left" />
      <img src={nube_abajo_derecha} alt="Nube inferior derecha" className="nube nube-bottom-right" />
      <img src={nube_abajo_derecha} alt="Nube inferior derecha" className="nube nube-bottom-right-2" />
    </section>
  );
};


