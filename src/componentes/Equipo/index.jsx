import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

  //DESTRUCTURACION
  const {titulo, colorPrimario} = props.data
  const {colaboradores, eliminarColaborador, actualizarColor, cambiarFavorito} = props


    return <>{  colaboradores.length > 0 &&
      <section className="equipo" style={{ backgroundColor:  hexToRgba(colorPrimario, 0.4)}}>

      <input type="color" 
      className="input-color"
      value={colorPrimario}
      onChange={(e)=> {
        actualizarColor(e.target.value, titulo)
      }}
      />   
    <h3 style={{borderColor: colorPrimario }} >{titulo}</h3>

  <div className="colaboradores">

  { 
  colaboradores.map((colaborador,index)=>{
    return <Colaborador
      valorEquipo={colaborador.valorEquipo}
      valorFoto={colaborador.valorFoto}
      valorNombre={colaborador.valorNombre}
      valorPuesto={colaborador.valorPuesto}
      id={colaborador.id}
      key={index}
      colorPrimario={colorPrimario}
      eliminarColaborador={eliminarColaborador}
      cambiarFavorito={cambiarFavorito}
      fav={colaborador.fav}
      />
  })
  }

  </div>
  </section>
}</>
}

export default Equipo