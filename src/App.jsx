import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function prestar(){
  setDisponibles((d) => (d > 0 ? d - 1 : d))
}

function devolver() { 
  setDisponibles((d) => (d > 0 ? d + 1 : d))
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

        <main>
          <h2>Raspberry Pi</h2>
          <p>{disponibles} de {total} disponibles</p>
          <button type="button" onClick={prestar} disabled={disponibles===0}>prestar</button>
          <button type="button" onClick={devolver} disabled={disponibles===total}>devolver</button>
        </main>
        
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
