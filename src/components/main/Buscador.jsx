import { useState } from "react";
import "../../css/Buscador.css";

import BotonesBuscador from "./BotonesBuscador";

const Buscador = ({ valoresBusqueda, setValoresBusqueda }) => {
  /* Estado para manejar el tipo de busqueda */
  const [mostrarIput, setMostrarInput] = useState("");

  console.log(valoresBusqueda.valor);

  const handleBuscar = () => {
    console.log(valoresBusqueda);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white font-bold">
        {/* Boton para buscar por nombre */}
        <div className="flex justify-center mt-4 mb-4">
          <button
            className="BotonesBusqueda rounded-full"
            name="nombre"
            onClick={(e) =>
              setValoresBusqueda(
                { ...valoresBusqueda, tipo: e.target.name },
                setMostrarInput("nombre")
              )
            }
          >
            Buscar por nombre
          </button>
        </div>
        {/* Boton para buscar por numero */}
        <div className="flex justify-center mt-4 mb-4">
          <button
            className="BotonesBusqueda rounded-full"
            name="numero"
            onClick={(e) =>
              setValoresBusqueda(
                { ...valoresBusqueda, tipo: e.target.name },
                setMostrarInput("numero")
              )
            }
          >
            Buscar por número
          </button>
        </div>
        {/* Boton para buscar por tipo */}
        <div className="flex justify-center mt-4 mb-4">
          <button
            className="BotonesBusqueda rounded-full"
            name="tipo"
            onClick={(e) =>
              setValoresBusqueda(
                { ...valoresBusqueda, tipo: e.target.name },
                setMostrarInput("tipo")
              )
            }
          >
            Buscar por tipo
          </button>
        </div>
      </div>
      <div className="my-8 flex flex-col items-center">
        {/* Inputs y botones por tipo */}
        {mostrarIput === "nombre" || mostrarIput === "numero" ? (
          <input
            type="text"
            className="border-2 border-black-900 rounded px-2 py-1 my-2"
            onChange={(e) =>
              setValoresBusqueda({ ...valoresBusqueda, valor: e.target.value })
            }
          />
        ) : mostrarIput === "tipo" ? (
          <BotonesBuscador
            setValor={setValoresBusqueda}
            valor={valoresBusqueda}
          />
        ) : (
          ""
        )}
        {/* Boton para realizar la busqueda */}
        {valoresBusqueda.valor != undefined &&
        valoresBusqueda.tipo != undefined ? (
          <button
            className="BotonesBusqueda rounded-full !px-12 mt-4 text-white font-bold"
            onClick={handleBuscar}
          >
            Buscar
          </button>
        ) : (
          <button
            disabled
            className="BotonesBusquedaDesactivado rounded-full !px-12 mt-4 text-white font-bold opacity-50"
            onClick={handleBuscar}
          >
            Buscar
          </button>
        )}
      </div>
    </div>
  );
};

export default Buscador;
