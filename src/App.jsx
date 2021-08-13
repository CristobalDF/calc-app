/* eslint no-eval: 0*/ 
//Importacion en prioridad y con orden alfabetico
//1. Componentes Instalados
//2. Componentes propios
//3. CSS
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'


// Funcionalidad de componente
const App = () => { 

    //Array Destructuring, useState Hook
    //stack es la variable y setStack la funcion que lo modifica
    const [stack, setStack] = useState("")
    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"
    return (
    <main className='react-calculator'>
        <Result value={value}/>
        <Numbers onClickNumber={number => {setStack(`${stack}${number}`)}}/>
       <Functions 
           onContentClear={() => {setStack("")}}
            onDelete={ () => {
                if (stack.length > 0){
                    const newStack = stack.substring(0, stack.length-1)
                    setStack(newStack) 
                }
            }}
       />
        <MathOperations 
            onClickOperation={operation => {setStack(`${stack}${operation}`)}}
            onClickEqual = { equal =>{setStack(eval(stack).toString()) }}
        />
    </main>)
}


// Exportacion
export default App