'use client'
import { useAppContext } from '@/contex/PresMensual';
import React, { useState } from 'react'



export default function Presupuesto() {


    const {presupuesto,setPresupuesto} = useAppContext();
    const [nuevoPresupuesto,setNuevoPresupuesto]= useState(presupuesto);
    
    const handlePresupuesto=()=>{
        setPresupuesto(nuevoPresupuesto);
        alert(`Su presupuesto de este mes es de :${nuevoPresupuesto}`)
    
    }

  return (
    <div>
       
    <h2>Presupuesto Mensual</h2>
    <input
      type="number"
      value={nuevoPresupuesto}
      onChange={(e) => setNuevoPresupuesto(Number(e.target.value))}
    />
    <button onClick={handlePresupuesto}>Establecer Presupuesto</button>
    <p>Presupuesto actual: ${presupuesto}</p>
    
    </div>
  )
}


