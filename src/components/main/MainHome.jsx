import { useEffect, useState } from "react";
import Buscador from "./Buscador";
import Cards from "./Cards";
import axios from "axios";

const MainHome = () => {
  const [valoresBusqueda, setValoresBusqueda] = useState({});

  console.log(valoresBusqueda.valor);


  const getPokemones = async () => {
    try {
      let res = null;
      if (valoresBusqueda.tipo === "nombre") {
        res = await axios(
          `https://pokeapi.co/api/v2/pokemon/${valoresBusqueda.valor}`
        );
      }
      console.log(res.data);
    } catch (error) {
        console.log("Error en la petición:", error.message);
    }
  };

  
  useEffect(() => {
    if (valoresBusqueda.valor != undefined) {
      getPokemones();
    }
  }, [valoresBusqueda]);

  return (
    <>
      <Buscador
        valoresBusqueda={valoresBusqueda}
        setValoresBusqueda={setValoresBusqueda}
      />
      <Cards />
      <p>Cuerpo de la pagina</p>
    </>
  );
};

export default MainHome;
