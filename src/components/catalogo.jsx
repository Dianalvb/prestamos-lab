import { useState } from 'react'
import TarjetaEquipo from './TarjetaEquipo'

function Catalogo({ equipo = [], agregar }) {
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')

    console.log('render catalogo')

    const visibles = equipo
        .filter((e) => !soloDisponibles || e.disponible)
        .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    
    const totalDisponibles = equipo.reduce((suma, e) => (e.disponible ? suma + 1 : suma), 0)

    return (
        <section>
            <h2>Catálogo</h2>
            <p>{totalDisponibles} de {equipo.length} equipos disponibles</p>

            <label>
                Buscar equipo
                <input value={busqueda} onChange={(ev) => setBusqueda(ev.target.value)} />
            </label>

            <label>
                <input 
                    type="checkbox"
                    checked={soloDisponibles}
                    onChange={(ev) => setSoloDisponibles(ev.target.checked)}
                />
                Solo disponibles
            </label>

            {visibles.length === 0 ? (
                <p>No hay equipos</p>
            ) : (
                <div className="lista">
                    {visibles.map((e) => (
                        <TarjetaEquipo key={e.id} equipo={e} agregar={agregar} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Catalogo