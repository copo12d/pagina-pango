import '../Sections.css'
import logo from '../assets/react.svg'

export function Sections({titulo,subtitulo,descripcion}) {
    return (
        <section className='bg-color-section'>
            <div className='contenedor-titulo'>
                <h2 className='titulo-section'>{titulo}</h2>
                <p className='sub-titulo-section'>{subtitulo}</p>
            </div>
            <div className='contenedor-img'>
                <img src={logo} alt={descripcion} />
            </div>
        </section>
    )
}