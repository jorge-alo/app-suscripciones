
import { useRef, useState } from "react"
import "../styles/suscripciones.css"
import { PresupuestoDisponible } from "./PresupuestoDisponible"
import { SusciptionSelected } from "./SusciptionSelected"

export const Suscripciones = ({ input}) => {
    const [sus, setSus] = useState([])
    const [error, setError] = useState(false)
    const [errorGastos, setErrorGastos] = useState(false)
    const [service, setService] = useState("")
    const [precio, setPrecio] = useState("")
    const [itemId, setItemId] = useState(null)
    const precioInputReferencia = useRef(null)

    const handleOnChangeService = (e) => {
        setService(e.target.value)

    }
    const handleOnChangePrice = (e) => {
        setPrecio(e.target.value)
    }

    const handleSubmitSus = (e) => {
        e.preventDefault()

        if (service == "" || Number(precio) < 0) {
            setError(true)
            return
        } 

        if(itemId){
            setSus(sus.map(item => item.id === itemId 
                ? {...item, price:precio} 
                : item))
                setItemId(null)  
                setService("")
            setPrecio("")
        }else {   
                   
          const gastoTotalSimulado = sus.reduce((total, item) => total + Number(item.price),0) + Number(precio)

          if(gastoTotalSimulado > input){
            return setError(true)
          }
          setError(false)

            const newSubscription = {
                type: service,
                price: precio,
                id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
                
                
            }

         setSus((item) => [...item, newSubscription])
            setService("")
            setPrecio("")
        }}

        const handleEditar = (id) => {
            const item = sus.find(item => item.id === id)
            if(item){
                setItemId(id)
                setService(item.type)
                setPrecio(item.price)
                precioInputReferencia.current.focus()
            }
        }



    return (
        <>
            <div className="container-suscripciones">
                <PresupuestoDisponible
                input={input}
                precio={precio}
                sus={sus}
               
                >
                </PresupuestoDisponible>


                <form onSubmit={handleSubmitSus} className="container__suscriptores">
                    <h3>Agregar Suscriptores</h3>
                    <label htmlFor="servicio">servicio</label>
                    <select id="servicio" value={service} onChange={handleOnChangeService}>
                        <option value="">--Elejir--</option>
                        <option value="netflix">Netflix</option>
                        <option value="disneyplus">Disney Plus</option>
                        <option value="hbomax">HBO Max</option>
                        <option value="starplus">Star PLus</option>
                        <option value="primevideo">Prime Videos</option>
                        <option value="spotify">Spotify</option>
                        <option value="appletv">Apple Tv</option>
                    </select>


                    <label >Cantidad</label>
                    <input
                        ref={precioInputReferencia}
                        className="container__input-sus"
                        type="number"
                        placeholder="$200"
                        value={precio}
                        onChange={handleOnChangePrice}
                    />
                    <input
                        className="container__agregar-sus"
                        type="submit"
                        value="Agregar"

                    />
                    {error ?
                <p className="error">Presupuesto Invalido o el precio supera el monto disponible</p>
                : null }
                </form>


            </div>

            
                <SusciptionSelected
                    sus={sus}
                    setSus={setSus}
                    handleEditar={handleEditar}
                >
                </SusciptionSelected>
            

        </>
    )
}
