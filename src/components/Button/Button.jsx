//1. Importar librerias
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

//2.Funcionalidad de componente
const Button = ({ type, text, clickHandler }) => (    
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>    
)

//Funcion antes aplicar simplificacion de sintaxis.
//1.Cuando el cuerpo de la funcion tiene solo una linea es posible eliminar las llaves que rodean el cuerpo de la funcion. (Caso de onClick)
//2.Cuando el cuerpo de nuestra funcion solo consta del retorno y no existe otra sentencia adicional, es posible eliminar las llaves cambiandolas por parentesis, ademas se puede eliminar la palabra reservada return.
//
// const Button = ({ type, text, clickHandler }) => {
//     return ( 
//         <button className={type} onClick={() => { 
//             clickHandler(text)
//         }}>
//             <span>{text}</span>
//         </button>
//     )
// }

//Validaciones con propTypes

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

//3. Exportar
export default Button
