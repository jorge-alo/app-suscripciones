import { useState } from "react"
import { Presupuesto } from "./components/presupuesto"
import "./styles/appsuscripciones.css"
import { Suscripciones } from "./components/Suscripciones"


export const AppSuscripciones = () => {


  
  const [input, setInput] = useState("")
 
 
  const [count, setCount] = useState(false)
 
 
 

  return (
    <>
      <div className="container__appsus">
        <h1>SUSCRIPTIONS TRACKER</h1>

        {count === false ?
          <Presupuesto
            setInput={setInput}
            setCount={setCount}
            input={input}
          ></Presupuesto>
          : <>
            <Suscripciones
              input={input}
             
              >         
            </Suscripciones>

            
                  
          </>

        }

      </div>

    </>
  )
}
