
export interface gasto{
   id:number;
   categoria:string;
   monto:number;
   fecha:string;
}

export interface Presupuestoprops{
    presupuesto: number;
    setPresupuesto:(presupuesto:number) =>void;
    gastos: gasto[];
    setGastos:(gastos: gasto[])=>void
}