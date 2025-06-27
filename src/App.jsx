import './App.css'
import { LogoPango } from './components/LogoPango'
import { Sections } from './components/Sections'
import {General} from './components/general'
import Footer from './components/footer'
import { Hero } from './components/Hero'

const franelas= [{
  id: 1,
  titulo: "Anime",
  subtitulo: "Las mejores camisas",
  descripcionImg: "Camisa de Itachi",
  visible: true,
  descripcioninf: "Hola, soy Itachi Uchiha",
  img: 'itachi',
  beatiful: true
}, {
  id: 2,
  titulo: "Video Juegos",
  subtitulo: "Las mejores camisas",
  visible: false,
  descripcionImg: "Camisa de Samurai",
  img: 'samurai'
}, {
  id: 3,
  titulo: "Caricaturas",
  subtitulo: "Las mejores camisas",
  visible: false,
  descripcionImg: "Camisa de Jake",
  img: 'jake'
}
]
/* General */


const franelasGeneral = [{
  id: 1,
  titulo: "Anime",
  subtitulo: "Las mejores camisas",
  descripcionImg: "Camisa de Itachi",
  visible: true,
  descripcioninf: "Hola, soy Itachi Uchiha",
  img: 'todo'
}, {
  id: 2,
  titulo: "Video Juegos",
  subtitulo: "Las mejores camisas",
  visible: false,
  descripcionImg: "Camisa de Samurai",
  img: 'dragon'
}, {
  id: 3,
  titulo: "Caricaturas",
  subtitulo: "Las mejores camisas",
  visible: false,
  descripcionImg: "Camisa de Jake",
  img: 'progra1'},
  {
  id: 4,
  titulo: "Deportes",
  subtitulo: "Las mejores camisas",
  visible: false,
  descripcionImg: "Camisa de Futbol",
  img: 'sex'
  }
];


function App() {


  return (
    <>
      <nav className='nav-bar'>
        <ul className='nav-items'>
          <LogoPango />
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#Anime">Servicio</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="#footer-contact">Contacto</a></li>
        </ul>
      </nav>   
      <Hero 
        titulo="Bienvenido a Pango"
        />
      {franelas.map((franela) => ( 
        <Sections 
          key={franela.id}
          titulo={franela.titulo} 
          subtitulo={franela.subtitulo} 
          descripcionImg={franela.descripcionImg} 
          visible={franela.visible} 
          descripcioninf={franela.descripcioninf}
          img={franela.img}
          beatiful={franela.beatiful}
        />

      ))}
      <General>
         {franelasGeneral.map((franela) => ( 
          <Sections 
            key={franela.id}
            titulo={franela.titulo} 
            subtitulo={franela.subtitulo} 
            descripcionImg={franela.descripcionImg} 
            visible={franela.visible} 
            descripcioninf={franela.descripcioninf}
            img={franela.img}
          />
  
        ))}
        </General>
      <Footer />
    </>
    
  )
}

export default App

