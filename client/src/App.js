import { Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import Kitchen from './pages/Kitchen';
import Interior from './pages/Interior';
import Exterior from './pages/Exterior';
import ItemPage from './pages/ItemPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
           
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/kitchen" component={Kitchen}/>
          <Route exact path="/interior" component={Interior}/>
          <Route exact path="/exterior" component={Exterior}/>
          
        </div>
      </Router>
    );
  }
}

export default App;

// <Route exact path="/kitchen/:id" component={ItemPage}/>
// <Route exact path="/interior/:id" component={ItemPage}/>
// <Route exact path="/exterior/:id" component={ItemPage}/>

