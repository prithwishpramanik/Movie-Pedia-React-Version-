import React, { Component } from 'react';

import Nav from './navigation';
import Home from './home';
import { Switch,Route } from 'react-router-dom';

import Movie from './Movie';
import Search from './search';
class App extends Component {
  state = { 
    
   } 
  
  render() { 
    return (<div>
      
      <Nav/>
      <Switch>
        <Route path="/" component={Home}exact/>
        <Route path='/details/:id' component={Movie}/>
        <Route path='/search/:term' component={Search}/>

      </Switch>
      
    </div>
      
    );
  }
}
 
export default App;