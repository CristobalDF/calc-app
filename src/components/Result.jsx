import React from 'react'
import PropTypes from 'prop-types' // libreria para validacion de parametros

const Result = ({value}) => (
    <section className="result">
        <span>{value}</span>
    </section>
)

//Funcion previa a la simplificacion de sintaxis (explicada con detalle dentro de comentarios en componente Button)
// const Result = ({value}) => {
//     console.log("Console log result", value)
//     return(
//         <div className="result">
//             <span>{value}</span>
//         </div>

//     )
// }

Result.propTypes = {
    value: PropTypes.string.isRequired //valida que el value que se pasa como parametro a Result sea string y que el value sea requerido
}

Result.defaultProps = {
    value: "0"
}

export default Result