import { useState } from "react";
import Buscador from "./Buscador"

const MainHome = () => {

    const [valoresBusqueda, setValoresBusqueda] = useState({});

    return(
        <>
        <Buscador valoresBusqueda={valoresBusqueda} setValoresBusqueda={setValoresBusqueda}/>
        <p >Cuerpo de la pagina</p>
        </>
    )
}

export default MainHome