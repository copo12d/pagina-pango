import './App.css'
import { LogoPango } from './components/LogoPango'
import { Sections } from './components/Sections'
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
      <Sections titulo={"Anime"} subtitulo={"Las mejores camisas"} visible={true} descripcioninf={"hola"}/>
      <Sections titulo={"Video Juegos"} subtitulo={"Las mejores camisas"} />
      <Sections titulo={"Caracaturas"} subtitulo={"Las mejores camisas"} />
      <Sections titulo={"General"} subtitulo={"Las mejores camisas"} />
      
    </>
    
  )
}

export default App
