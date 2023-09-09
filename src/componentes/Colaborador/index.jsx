import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
  
  const {valorFoto, valorNombre, valorPuesto, colorPrimario, eliminarColaborador, id, cambiarFavorito, fav} = props

  return <div className="colaborador">
      <AiFillCloseCircle className="btn-eliminar" onClick={ () => eliminarColaborador(id)} />
      <div className="encabezado" style={{backgroundColor: colorPrimario}}>
        <img src={valorFoto} alt="" />
      </div>
      <div className="info">
        <h4>{valorNombre}</h4>
        <h5>{valorPuesto}</h5>
        {
          fav === true ? <AiFillHeart onClick={()=>cambiarFavorito(id)} className="fav favorito"/> : <AiOutlineHeart onClick={()=>cambiarFavorito(id)} className="fav"/>
        }
        
        
      </div>
  </div>
}

export default Colaborador