


export const PresupuestoDisponible = ({ input, precio, sus = []}) => {


  const gastos = sus.reduce((total, item) => total + Number(item.price), 0)

  const disponible = input - gastos

 
 

  

  return (

    <div className="container-disponible">
      
          
            <h4>Presupuesto: ${input}</h4>
            <h4>disponible: ${input - gastos}</h4>
            <h4>Gastos: ${gastos}</h4>

    </div>

  )
}
