import '../Sections.css'


export function Sections({titulo, subtitulo, descripcionImg, visible, descripcioninf,img,beatiful}) {
    // const bg_section = beatiful ? 'beatiful' : 'bg-color-section'
    // const bg_titulo = beatiful ? 'beatiful-titulo' : 'bg-color-section'
    // const bg_sub_titulo = beatiful ? 'beatiful-sub-titulo' : 'bg-color-section'
    return (
        <section className={`bg-color-section ${beatiful ? 'beatiful' : ''}`} id={titulo}>
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