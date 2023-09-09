import "./Campo.css"

const Campo = (props) => {
  //DESTRUCTURACION DE PROPS
  const {titulo, placeholder, required, type="text"} = props


  const recibirValor = (e) => {
    props.actualizarValor(e.target.value)
  }

  return <div className={`campo campo-${type}`}>
    <label className="label">{titulo}</label>
    <input className="input" 
    placeholder={placeholder} 
    required={required} 
    value={props.valor} 
    onChange={recibirValor}
    type={type}/>
  </div>
  
}

export default Campo