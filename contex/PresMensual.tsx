'use client'
import React, {useContext, createContext ,useState } from 'react'
import { gasto,Presupuestoprops } from '@/Modelos/Ipresupuesto'



const Presupuesto = createContext<Presupuestoprops | undefined>(undefined);

export const PresMesualidad =({children}: { children: React.ReactNode })=>{
    const [presupuesto, setPresupuesto]= useState(0);
    const [gastos, setGastos]= useState<gasto[]>([]);


    return(
      <Presupuesto.Provider value={{presupuesto,setPresupuesto,gastos,setGastos}}>
      {children}
      </Presupuesto.Provider>

    );

};

export const useAppContext = ()=>{
    const context = useContext(Presupuesto);
    if (context===undefined){
        throw new Error("Error con el context")
    }
    return context;
}
