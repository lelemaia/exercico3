import { useState } from "react";

export default ()=> {
    const [aluno, setAluno] =useState("tchau");
    return(
        <>
        <p className="cTeste">Aluno: {aluno}</p>
        <button onClick={()=>setAluno('ola')}>Mudar</button>
        </>
    )
}