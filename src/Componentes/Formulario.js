import React,{Component} from 'react';

class Formulario extends Component{
    constructor(){
        super();
       this.state={
           Dia:'Lunes',
           Cantidad:'',
           Autoevaluacion:''
       };
       this.handleInput = this.handleInput.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name}=e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddDay(this.state)
    }


    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <select name="Dia" className="form-control" onChange={this.handleInput} >
                            <option>Lunes</option>
                            <option>Martes</option>
                            <option>Miercoles</option>
                            <option>Jueves</option>
                            <option>Viernes</option>
                            <option>Sabado</option>
                            <option>Domingo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Cantidad" className="form-control" onChange={this.handleInput} placeholder="Cigarrillos sin fumar"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="Autoevaluacion" className="form-control" onChange={this.handleInput} placeholder="Como te sientes?"/>
                    </div>
                    <button type="submit" className="btn btn-danger">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}
export default Formulario