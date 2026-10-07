function Solicitar({solicitudes, quitar}){
    return(
        <section>
            <h2>Solicitar</h2>

            <ul>
                {solicitudes.map((equipo) => (
                    <li key={equipo.id}>
                        {equipo.nombre}
                        <button onClick={() => quitar(equipo.id)}>Borrar</button>
                        </li>
                ))}
            </ul>
        </section>
    )
}
export default Solicitar