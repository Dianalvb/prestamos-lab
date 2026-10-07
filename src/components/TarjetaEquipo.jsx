function TarjetaEquipo( { equipo, agregar } ){
    const {id, nombre, categoria, cantidad, disponible} = equipo
    return (
        <article className="tarjeta">
        <h3>{nombre}</h3>
        <p>{id} - {categoria} </p>
        <p>{disponible ? 'Disponible' : 'Prestado'}</p>
        <button type = "button" disabled={!disponible} onClick={()=>agregar(equipo)}>
            {disponible ? 'Solicitar': 'No disponible '}
        </button>
        </article>
    )
}
export default TarjetaEquipo