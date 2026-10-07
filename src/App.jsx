import { useState } from 'react'
import { equipo } from './data/equipo'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import TarjetaEquipo from './components/TarjetaEquipo'
import Catalogo from './components/Catalogo'
import Solicitar from './components/Solicitar' 

function App() {
  const [count, setCount] = useState(0)
  const [disponibles, setDisponibles] = useState(5) 
  const [total, setTotal] = useState(5)
  const [solicitudes, setSolicitudes]=useState([])

  function prestar() {
    setDisponibles((d) => (d > 0 ? d - 1 : d))
  }

  function devolver() { 
    setDisponibles((d) => (d < total ? d + 1 : d))
  }

  function agregar(equipo){
    setSolicitudes((lista) => [...lista, equipo])
    
  }

  function quitar(id){
    setSolicitudes((lista) => lista.filter((equipo) => equipo.id !==id))
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Mi primera app</h1>
          <p>
            Autor: Diana Valencia :p
          </p>
          <h2>{count}</h2>
        </div>
      </section>

      <Solicitar solicitudes={solicitudes} quitar={quitar}/>

      <div style={{ padding: '20px' }}>
        <Catalogo equipo={equipo} agregar={agregar}/>
      </div>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App