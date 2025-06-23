import './App.css'
import { LogoPango } from './components/LogoPango'
import { Sections } from './components/Sections'

const franelas= [{
  id: 1,
  titulo: "Anime",
  subtitulo: "Las mejores camisas",
  descripcionImg: "Camisa de Itachi",
  visible: true,
  descripcioninf: "Hola, soy Itachi Uchiha",
  img: 'itachi'
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
}, {
  id: 4,
  titulo: "General",
  subtitulo: "Las mejores camisas"
}]

function App() {


  return (
    <>
      <nav className='nav-bar'>
        <ul className='nav-items'>
          <LogoPango />
          <li>Inicio</li>
          <li>Servicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </nav>      
      {franelas.map((franela) => ( 
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
      
    </>
    
  )
}

export default App

