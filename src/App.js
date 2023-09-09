import "./App.css";
import Header from "./componentes/Header/index";
import Formulario from "./componentes/Formulario/index";
import MiOrg from "./componentes/MiOrg";
import { useState } from "react";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer/Footer";
import { v4 as uuid } from "uuid";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      fav: false,
      id: uuid(),
      valorEquipo: "Programación",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
    {
      fav: false,
      id: uuid(),
      valorEquipo: "Programación",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
    {
      fav: false,
      id: uuid(),
      valorEquipo: "Programación",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
    {
      fav: false,
      id: uuid(),
      valorEquipo: "Front End",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
    {
      fav: false,
      id: uuid(),
      valorEquipo: "Data Science",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
    {
      fav: false,
      id: uuid(),
      valorEquipo: "Devops",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
    {
      fav: false,
      id: uuid(),
      valorEquipo: "UX y Diseño",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
    {
      fav: false,
      id: uuid(),
      valorEquipo: "Móvil",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
    {
      fav: false,
      id: uuid(),
      valorEquipo: "Innovación y Gestión",
      valorNombre: "Lorem ipsum",
      valorPuesto: "lorem",
      valorFoto: "https://web.unfv.edu.pe/facultades/fiei/images/cono_a.png",
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const [favorito, actualizarFavorito] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  //Actualizar color de equipo

  const actualizarColor = (color, titulo) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.titulo === titulo) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  //Cambiar favorito

  const cambiarFavorito = (id) => {
    actualizarFavorito(!favorito);
    console.log(favorito, id);
    const colaboradorActualizado = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    actualizarColaboradores(colaboradorActualizado);
  };

  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      ) : (
        <></>
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo, index) => (
        <Equipo
          titulo={equipo.titulo}
          data={equipo}
          key={index}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.valorEquipo === equipo.titulo
          )}
          equipos={equipos}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          cambiarFavorito={cambiarFavorito}
          favorito={favorito}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
