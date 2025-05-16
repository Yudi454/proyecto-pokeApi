import { useEffect } from "react"
import "../../css/BotonesTipos.css"

const BotonesBuscador = ({setValor,valor}) =>{

    const handleValorTipo = (tipo) => {
        setValor({...valor, valor: tipo})
    }

    return(
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-6">
            <button className="btn btnNormal rounded-full !px-10" onClick={() => handleValorTipo(1)}>Normal</button>
            <button className="btn btnLucha rounded-full !px-10" onClick={() => handleValorTipo(2)}>Lucha</button>
            <button className="btn btnVolador rounded-full !px-10" onClick={() => handleValorTipo(3)}>Volador</button>
            <button className="btn btnVeneno rounded-full !px-10" onClick={() => handleValorTipo(4)}>Veneno</button>
            <button className="btn btnTierra rounded-full !px-10" onClick={() => handleValorTipo(5)}>Tierra</button>
            <button className="btn btnRoca rounded-full !px-10" onClick={() => handleValorTipo(6)}>Roca</button>
            <button className="btn btnBicho rounded-full !px-10" onClick={() => handleValorTipo(7)}>Bicho</button>
            <button className="btn btnFantasma rounded-full !px-10" onClick={() => handleValorTipo(8)}>Fantasma</button>
            <button className="btn btnAcero rounded-full !px-10" onClick={() => handleValorTipo(9)}>Acero</button>
            <button className="btn btnFuego rounded-full !px-10" onClick={() => handleValorTipo(10)}>Fuego</button>
            <button className="btn btnAgua rounded-full !px-10" onClick={() => handleValorTipo(11)}>Agua</button>
            <button className="btn btnPlanta rounded-full !px-10" onClick={() => handleValorTipo(12)}>Planta</button>
            <button className="btn btnElectrico rounded-full !px-10" onClick={() => handleValorTipo(13)}>Electrico</button>
            <button className="btn btnPsiquico rounded-full !px-10" onClick={() => handleValorTipo(14)}>Psiquico</button>
            <button className="btn btnHielo rounded-full !px-10" onClick={() => handleValorTipo(15)}>Hielo</button>
            <button className="btn btnDragon rounded-full !px-10" onClick={() => handleValorTipo(16)}>Dragon</button>
            <button className="btn btnSiniestro rounded-full !px-10" onClick={() => handleValorTipo(17)}>Siniestro</button>
            <button className="btn btnHada rounded-full !px-10" onClick={() => handleValorTipo(18)}>Hada</button>
        </div>
    )
}

export default BotonesBuscador