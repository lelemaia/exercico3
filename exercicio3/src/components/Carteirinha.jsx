import React from 'react'
import { useState } from 'react'

export default ()=>{
    const [carteirinha,setCarteirinha]=useState({'marca':'','modelo':''})
    const mostrarCarteirinha =(e)=> {
        const {name,value} = e.target;
        if(name== 'marca'){
            setCarteirinha({'marca': value, 'modelo': carteirinha.modelo})
        }else if (name =='modelo'){
            setCarteirinha({'marca': carteirinha.marca, 'modelo' : value})
        }
    }

    return (
        <>
        <h2>Dados do Carro</h2>
        Marca: <input name="marca" on onChange={mostrarCarteirinha} /> <br/>
        Modelo: <input name="modelo" on onChange={mostrarCarteirinha} /> <br/>
        <p>Meu carro é um {carteirinha.marca} {carteirinha.modelo}</p>
        </>
    )
}