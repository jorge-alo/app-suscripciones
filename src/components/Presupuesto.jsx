import { useState } from "react"
import "../styles/presupuesto.css"

export const Presupuesto = ({setInput,setCount,input}) => {
    const [error, setError] = useState(false)
    const handleOnchange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(input == "" || Number(input) < 0){
           return setError(true)
        }
        setCount(true)
    }
    
  return (
    <>
        <div className="container-presupuesto">
            <h3>Agregar Presupuesto</h3>
            <form className="container__form" onSubmit={handleSubmit}>
                <input
                 className="container__input"
                  type="number" placeholder="$200"
                  onChange={handleOnchange}
                  />
                <button className="container__agregar" type="submit">Agregar</button>
                
            </form>
            {error ? <p className="error-presupuesto">Ingrese un valor valido</p>
                        : null
            }
        </div>
    </>
  )
}
