import { useState } from "react";

export default ()=> {
    const [semafaro, setSemafaro] =useState("Pare");
    return(
        <>
        <p className="cTeste">{semafaro}</p>
        <button onClick={()=>setSemafaro('Atenção')}>Mudar</button>
        </>
    )
}