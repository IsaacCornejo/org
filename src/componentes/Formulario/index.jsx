import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
import { useState } from "react"

const Formulario = (props) => {

  const {registrarColaborador, crearEquipo} = props

  const [valorNombre, actualizarNombre] = useState ("");
  const [valorPuesto, actualizarPuesto] = useState ("");
  const [valorFoto, actualizarFoto] = useState ("");
  const [valorEquipo, actualizarEquipo] = useState ("");
  const [titulo, actualizarTitulo] = useState ("");
  const [color, actualizarColor] = useState ("");
  
  
  const manejarEnvio = (e) => {
    e.preventDefault();
    
    let datosAEnviar = {
      valorNombre,
      valorPuesto,
      valorFoto,
      valorEquipo
    }
    registrarColaborador(datosAEnviar)
  }

  const manejarNuevoEquipo = (e)=> {
    e.preventDefault()
    crearEquipo({titulo,colorPrimario: color})
  }

  return <section className="formulario">
  <form onSubmit={manejarEnvio}>
    <h2>Rellena el formulario para crear el colaborador</h2>
    <Campo titulo="Nombre" placeholder="Ingresar nombre..." required={true} 
    valor={valorNombre} 
    actualizarValor={actualizarNombre} />
    <Campo titulo="Puesto" placeholder="Ingresar puesto..."required={true}valor={valorPuesto} 
    actualizarValor={actualizarPuesto}/>
    <Campo titulo="Foto" placeholder="Ingresar enlace de foto..."required={true}valor={valorFoto} 
    actualizarValor={actualizarFoto}/>
    <ListaOpciones valor={valorEquipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
    <Boton texto="Crear"/>
  </form>

  <form onSubmit={manejarNuevoEquipo}>
    <h2>Rellena el formulario para crear el equipo</h2>
    <Campo 
    titulo="Equipo" 
    placeholder="Ingresar nombre..." 
    required={true} 
    valor={titulo} 
    actualizarValor={actualizarTitulo} />
    <Campo 
    titulo="Color" 
    placeholder="Ingresar puesto..."
    required={true}
    valor={color} 
    actualizarValor={actualizarColor}
    type="color"/>
    <Boton texto="Crear equipo"/>
  </form>
  </section>

}

export default Formulario