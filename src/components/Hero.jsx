import '../Hero.css';
import { LogoPango } from './LogoPango';
import nube_arriba from '../assets/nube-arrba.svg';
import nube_abajo_izq from '../assets/nube-abajo-izq.svg';
import nube_abajo_derecha from '../assets/nube-abj-derec.svg';
export const Hero = () => {
  return (
    <section className="hero" id='hero'>
      <div className="hero-content">
        <div className="logo-title">
            <LogoPango />
          <h3 className="studio-name">PANGO STUDIO</h3>
        </div>
        <h1 className="hero-title">PANGO <br /> FASHION</h1>
        <p className="hero-description">
          ¡Hola! somos Pango Fashion, tu nueva tienda favorita para franelas con impresion DTF.
          Creemos que lucir diseños increíbles no tiene por qué romper tu alcancía.
        </p>
      </div>
      <div className='mira-pagina'>
        <a className='estilo-btn' href='https://www.instagram.com/pangofashion/' target='_blank' rel='Instagram'>
          Hecha un vistazo 
        </a>
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


