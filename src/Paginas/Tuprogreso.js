import React from 'react';
import { Ejemplos } from '../Ejemplos.json';
import Formulario from '../Componentes/Formulario';

class Tuprogreso extends React.Component{
    constructor(){
        super();
        this.state = {
            Ejemplos
        };
        this.handleAddDay = this.handleAddDay.bind(this);
    }

    handleAddDay(Ejemplo){
        this.setState({
            Ejemplos:[...this.state.Ejemplos, Ejemplo]
        })
    }

    DeleteDay(index) {
        if(window.confirm('¿Estas seguro?')){
            this.setState({
                Ejemplos:this.state.Ejemplos.filter((e, i) => {
                    return i !== index
                })
            })
        }  
    }

    render(){
        const Ejemplos = this.state.Ejemplos.map((Ejemplo, i) => {
            return(
               <div className="col-md-4 text-center" key={i}>
                    <div className="card mt-4" >
                        <div className="card-header">
                          <h4 className="d-inline">{Ejemplo.Dia}</h4>
                          <span className="badge badge-pill badge-success ml-2 pb-0">
                          <h6>{Ejemplo.Cantidad}</h6>
                          </span>
                        </div>
                        <div className="card-body">
                            <p>{Ejemplo.Autoevaluacion}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger float-right" onClick={this.DeleteDay.bind(this, i)}>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>
               </div>
            )
        })
        return(
        <div>
            <h1 className="bg-dark text-white text-center font-italic">Nada es imposible!</h1>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-4 text-center">
                        <Formulario onAddDay={this.handleAddDay}/>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                        {Ejemplos}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Tuprogreso