'use client'
import {  useAppContext} from '@/contex/PresMensual'
import React, { useState } from 'react'
import axios from 'axios'

export default function RegGastos() {
    const {gastos,setGastos,presupuesto}=useAppContext();
    const [nuevoGasto,setNuevoGasto]=useState({
        categoria:'',
        monto:0,
        fecha:''

    })

    const agregarGasto = async ()=>{
        try {
            const res = await axios.post('http://localhost:5000/gasto',nuevoGasto);
            setGastos([...gastos,res.data]);
            
            console.log(res)
        } catch (error) {
            console.error ("Error al agregar un gasto",error)
        }
    }



  return (
    <div>
    <h3>Registro de Gastos</h3>
    <select
    onChange={(e) => setNuevoGasto({ ...nuevoGasto, categoria: e.target.value })}
    value={nuevoGasto.categoria}
  >
    <option value="">Selecciona una categoría</option>
    <option value="Ropa">Ropa</option>
    <option value="Comida">Comida</option>
    <option value="Entretenimiento">Entretenimiento</option>
  </select>

    <input type="number" placeholder="Monto" onChange={(e) => setNuevoGasto({ ...nuevoGasto, monto: Number(e.target.value) })} />
    <input type="date" onChange={(e) => setNuevoGasto({ ...nuevoGasto, fecha: e.target.value })} />
    
    <button onClick={agregarGasto}>Añadir Gasto</button>

    <h4>Gastos Agregados</h4>
    <ul>
        {Array.isArray(gastos) && gastos.length > 0 ? (
          gastos.map((gasto, index) => (
            <li key={gasto.id || index}>{gasto.categoria}: ${gasto.monto}</li>
          ))
        ) : (
          <li>No hay gastos registrados</li>
        )}
      </ul>
  
    </div>
  )
}
