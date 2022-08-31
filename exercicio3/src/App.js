import React from 'react'
import './App.css'
import CommponenteTeste from './CommponenteTeste'
import CaixaTeste from './components/CaixaTeste'
import Carteirinha from './components/Carteirinha'
import Semafaro from './components/Semafaro'
import TesteState from './components/TesteState'
import TesteStateFilho from './components/TesteStateFilho'


export default () =>{

  return (
    <> 
    <Semafaro></Semafaro>
    <TesteState></TesteState>
    <CommponenteTeste></CommponenteTeste>
    <CaixaTeste></CaixaTeste>
    <Carteirinha></Carteirinha>
    </>
  )
}   
