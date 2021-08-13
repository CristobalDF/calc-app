import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

//A partir de un arreglo que contiene los numeros de la calculadora, se genera un boton en ES6 para cada numero. Estos seran incluidos dentro de la seccion en la que fue llamada la funcion renderButtons.
// Ya que ahora estamos generando una lista de forma dinamica, es necesario inclir el concepto key.
const numbers = [7,8,9,4,5,6,1,2,3,0]
const Numbers = ({ onClickNumber }) => (
    <section className="numbers">{
        numbers.map( n =>  <Button key={n} text = {n.toString()} clickHandler={onClickNumber} />)
    }</section>
)

//Funcion antes de optimizacion DRY (Don't Repeat Yourself) 
// const Numbers = ({onClickNumber}) => (
//     <section className="numbers">
//         <Button text="1" clickHandler={onClickNumber} />
//         <Button text="2" clickHandler={onClickNumber} />
//         <Button text="3" clickHandler={onClickNumber} />
//         <Button text="4" clickHandler={onClickNumber} />
//         <Button text="5" clickHandler={onClickNumber} />
//         <Button text="6" clickHandler={onClickNumber} />
//         <Button text="7" clickHandler={onClickNumber} />
//         <Button text="8" clickHandler={onClickNumber} />
//         <Button text="9" clickHandler={onClickNumber} />
//         <Button text="0" clickHandler={onClickNumber} />
//     </section>
// )



Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers