import React from 'react'
import '../Sections.css'
/* import logo from '../assets/react.svg' */

export function Sections({titulo, subtitulo, descripcionImg, visible, descripcioninf,img}) {
    return (
        <section className='bg-color-section'>
            <div className='contenedor-titulo'>
                <h2 className='titulo-section'>{titulo}</h2>
                <p className='sub-titulo-section'>{subtitulo}</p>
            </div>
            <div className='contenedor-img'>
                <img  
                alt={descripcionImg} 
                className='img' 
                src={(`src/assets/frane/${img}.png`)}
                />
            </div>
            {visible && descripcioninf && (
                <div className='contenedor-descripcioninf'>
                    <p className='descripcioninf'>{descripcioninf}</p>
                </div>
            )}
        </section>
    )
}