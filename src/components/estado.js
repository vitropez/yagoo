import React, {Component} from "react";
function EstaoAlHijo(props){
    return(
        <div>
            <h3> le estamos pasando la funcion contador 
                en las props del padre{props.contadorHijo}</h3>
        </div>
    );
}


export default class Estado extends Component{
constructor(props){
    super(props);
    this.state={
        contador:0,
    };

    setInterval(()=>{
        this.setState({
            contador:this.state.contador+1
        })
    },1000)
    }


render(){
    return(
        <div>
         <h2>El estado</h2>
         <p>{this.state.contador}</p>
         <EstaoAlHijo contadorHijo={this.state.contador}/>
        </div>
    )

}
}