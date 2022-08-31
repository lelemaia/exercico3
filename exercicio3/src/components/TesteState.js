import React, {useState} from "react";
import TesteStateFilho from "./TesteStateFilho";

export default ()=> {
    const [valorState, setValorState] = useState(5)
    function aumentar(){
        setValorState(valorState + 5)
        
    }
    return(
      <>
        <p>valorState: {valorState}</p>
        
        <button onClick={()=>aumentar()}>Aumentar</button>
        <TesteStateFilho valor={valorState} aumentar={aumentar}></TesteStateFilho>
      </>
    )
}