import "./ListaOpciones.css"

const ListaOpciones = (props) => {



  const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value)
  }

  return <div>
    <label className="label" >Equipos</label>
    <select className="select" value={props.valorEquipo} onChange={manejarCambio}>
    <option disabled selected value="" hidden>Seleccionar equipo</option>
      {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>
      )}
    </select>
  </div>
}

export default ListaOpciones