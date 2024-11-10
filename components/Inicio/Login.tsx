'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login:React.FC = ()=>{
    const [username,setUsername] =useState('');
    const [password,setPassword] =useState('');
    const router = useRouter ();


const handleinicio = (): void =>{
    if (username==='admin' && password === 'admin123'){
        router.push('/Presupuesto');

    }else{
        alert ("Usuario o Contradeña Incorrectos");
       }
   }  

   return (
    <div>
        <h2>Iniciar Sesión</h2>
        <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleinicio}>Ingresar</button>
    </div>
);
}
export default Login