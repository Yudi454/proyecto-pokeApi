import { useState } from "react";
import "../../css/Buscador.css";

const Buscador = ({valoresBusqueda,setValoresBusqueda}) => {

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white font-bold">
        <div className="flex justify-center mt-4 mb-4">
          <button
            className="BotonesBusqueda rounded-full"
            name="nombre"
            onClick={(e) =>
              setValoresBusqueda({ ...valoresBusqueda, tipo: e.target.name })
            }
          >
            Buscar por nombre
          </button>
        </div>
        <div className="flex justify-center mt-4 mb-4">
          <button
            className="BotonesBusqueda rounded-full"
            name="numero"
            onClick={(e) =>
              setValoresBusqueda({ ...valoresBusqueda, tipo: e.target.name })
            }
          >
            Buscar por número
          </button>
        </div>
        <div className="flex justify-center mt-4 mb-4">
          <button
            className="BotonesBusqueda rounded-full"
            name="tipo"
            onClick={(e) =>
              setValoresBusqueda({ ...valoresBusqueda, tipo: e.target.name })
            }
          >
            Buscar por tipos
          </button>
        </div>
      </div>
      <div className="my-8 flex flex-col items-center">
        <input
          type="text"
          className="border-2 border-black-900 rounded px-2 py-1 my-2"
          onChange={(e) =>
            setValoresBusqueda({ ...valoresBusqueda, valor: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Buscador;
