import "./MiOrg.css"

const MiOrg = (props) => {

  const {cambiarMostrar} = props

return <section className="section__miOrg">
<h2 className="titulo__miOrg">Mi organizacion</h2>
<img src="/img/add.png" alt="Boton" className="boton__miOrg" onClick={cambiarMostrar}/>

</section>
}

export default MiOrg 