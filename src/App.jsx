import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Proyectos from './components/Proyectos/Proyectos'
import Tecnologias from './components/Tecnologias/Tecnologias'
import HojaDeVida from './HojaDeVida'
import Contacto from './components/Contacto/Contacto'

export function PaginaActual() {
  if (window.location.pathname === "/hoja-de-vida") {
    return <HojaDeVida />;
  }

  return <App />;
}

function App() {
  return (
    <div className="portfolio">
      <nav className='navbar navbar-expan container py-4'>
        <a className='navbar-brand' href='#inicio'>
          MK <span>.</span>
        </a>

        <div className= "ms-auto d-flex gap-3">
            <a className='nav-link' href='#proyectos'>
              proyectos 
            </a>
            <a className='nav-link' href='#contacto'>
              contacto 
            </a>
            <a className="nav-link" href="#tecnologias">
              Tecnologías
            </a>
            <a className='nav-link' href="/hoja-de-vida">
              Hoja de vida
            </a>
        </div>
      </nav>

      <main>
        <section id='inicio' className='hero container'>
          <div className='hero__contenido'> 
            <p className="etiqueta">
              Hola, mi nombre es Maxi
            </p>

            <h1>
              Maximiano Agustin
              <br />
              <span>Karsvnie.</span>
            </h1>

            <h2>
              Programador Front-End y backend.
            </h2>

            <p className="descripcion">
               Me interesa crear soluciones de software,
              desarrollar aplicaciones y aprender nuevas
              tecnologías para resolver problemas reales.
            </p>
            
            <div className="d-flex flex-wrap gap-3 mt-4">
                <a 
                href="#proyectos" 
                className="btn btn-violeta">
                  Ver Proyectos
                </a>
                <a 
                  href="https://github.com/maxikarsvnie"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  Mi GitHub ↗
                </a>
            </div>
          </div>
        </section>

        <section id='proyectos' className='container seccion'>
          <p className="etiqueta">Mi Trabajo</p>
          <h2 className="titulo">Proyectos</h2>
          <p>
            Vas a encontrar acá mis proyectos
            académicos y personales.
          </p>
          <Proyectos />
        </section>  
        <section id="tecnologias" className="container seccion">
          <p className="etiqueta">MI STACK</p>
          <h2 className="titulo">Tecnologías y herramientas</h2>
          <p>
            Lenguajes, frameworks y herramientas que utilizo
            en mis proyectos y en mi formación como desarrollador.
          </p>
          <Tecnologias />
        </section>
        <section id='contacto' className='container seccion'>
          <p className="etiqueta">Hablemos</p>
          <h2 className="titulo">Contacto</h2>
          
            <Contacto />

        </section>
      </main>

      <footer className='container py-4'>
        @ {new Date().getFullYear()} Maximiano Agustin Karsvnie
      </footer>
    </div>
  )
}

export default App