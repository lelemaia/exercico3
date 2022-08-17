import React from 'react'

export default function Carro(props) {

    let valor = 0
    const executaFuncao = (funcao)=>{
        valor = valor + funcao
        console.log(valor)
    }

  return (
    <div>
        <h2>Lista de Carros</h2>
        <ul>
            {
                props.listaDeCarros.map((carro,i)=>
                <li>{carro}</li>
            )}
        </ul>
    </div>
  )
}
