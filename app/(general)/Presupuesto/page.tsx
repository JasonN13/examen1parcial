import Presupuesto from '@/components/Presupuesto/Presupuesto'
import React from 'react'
import { PresMesualidad } from '@/contex/PresMensual';

export default function page() {
  return (
    <div>
    <PresMesualidad>
   <Presupuesto/>
   </PresMesualidad>
    
    </div>
  )
}
