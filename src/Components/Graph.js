import { Component } from "react";
import graph from '../graph.PNG';
import img from '../img.PNG';
class Graph extends Component{
  
    render (){

        return( 
            <div className="settings">
                <h1 >График функции</h1>
                <img src={img} alt="image" />
                <br/>
                <img className="graphic" src={graph}/>
            </div>
        );
    }
}
export default Graph;