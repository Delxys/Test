import './App.css';
import { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Method from './Components/Method';
import Graph from './Components/Graph';
import Calculation from './Components/Calculation';

class App extends Component{
  
  render(){
    return ( 
      <div>
        <Switch>
          <Route exact path="/" component={Calculation} />
          <Route path="/graph" component={Graph} />
          <Route component={Method} path="/method"/>
        </Switch>
 
      </div>
    );
  }

}
export default App;
