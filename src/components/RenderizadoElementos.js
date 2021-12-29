import { render } from "@testing-library/react";
import React,{Component} from "react";
export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state={
            seasons:["primavera","verano","otoño","invierno"],

        };
    
    }
        render(){
        return(
            <div>
            <h2>RenderizadoElementos</h2>
            <h3>Estaciones del año</h3>
            <ol>
                {
               this.state.seasons.map((e)=>(
                    <li key={e}>{e}</li>
        ))}

                  
                
            </ol>
            </div>
        );
    }
}
