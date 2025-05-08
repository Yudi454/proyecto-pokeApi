import "../../css/Buscador.css";

const Buscador = () => {
  return (
    <div className=" grid-cols-1 sm:grid grid-cols-3 gap-4 text-white font-bold">
      <div className="flex justify-center mt-4 mb-4">
        <button className="BotonesBusqueda rounded-full">
          Buscar por nombre
        </button>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button className="BotonesBusqueda rounded-full">
          Buscar por número
        </button>
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button className="BotonesBusqueda rounded-full">
          Buscar por tipos
        </button>
      </div>
    </div>
  );
};

export default Buscador;
