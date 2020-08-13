import React from 'react';
import '../Componentes/Style/Inicio.css';
import Boton from '../Componentes/Boton'

class Inicio extends React.Component{
    render(){
        return(
            <div className="Inicio">
                <h1 className=" display-4 font-weight-bold text-center font-italic ">Quieres dejar de fumar?</h1>
                <h1 className="text-center font-italic">Escribí tu progreso con nosotros y notá la diferencia</h1>
                <Boton></Boton>
            </div>
        )
    }
}

export default Inicio