

export const SusciptionSelected = ({ sus, setSus, handleEditar }) => {
  const handleBorrar = (id) => {
    const nuevasSuscripciones = sus.filter(item => item.id !== id )
    setSus(nuevasSuscripciones)
  }

  
  return (
    <>
      <div className="container-selected">
        <h2>Suscripciones</h2>
        {sus
            .map(item => (
              <div className="container__datos" key={item.id}>
              <img className="imagen-selected" src={`../../imagenes/${item.type}.png`} alt={item.type} />
              <h3>Precio: ${item.price}</h3>
              <button
              className="boton-susctiption"
              onClick={()=> handleBorrar(item.id)}>Borrar</button>
              <button
              className="boton-susctiption"
              onClick={()=> handleEditar(item.id)}
              >Editar</button>
            </div>
          ))}
      </div>

    </>
  )
}
