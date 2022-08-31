import React from "react";

export default props=>{

    return(
        <div>
            <p>Valor de State no filho: {props.valor}</p>
            <button onClick={()=> props.aumentar()}>Aumentar</button>
        </div>
    );
}