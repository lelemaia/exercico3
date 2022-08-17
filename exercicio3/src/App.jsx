import React from "react";
import './index.css'

import Semafaro from './components/Semafaro'
import Carros from './components/Carros'
import Carteirinha from './components/Carteirinha'

export default function App(){

const listaDeCarros = ['Fusca','Chevete','Brasilia','Uno','Ka','Corsa','Pálio']

//FUNÇÃO
const soma = (a,b)=>{
    return a+b
}

return(
   <div>
       <Carros
          listaDeCarros={listaDeCarros}  
        />
  </div>
)
}

   
