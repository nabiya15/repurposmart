import { Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import Kitchen from './pages/Kitchen';
import Interior from './pages/Interior';
import Exterior from './pages/Exterior';
import ItemPage from './pages/ItemPage';
import ItemCard from './components/ItemCard';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/kitchen" component={Kitchen}/>
          <Route exact path="/interior" component={Interior}/>
          <Route exact path="/exterior" component={Exterior}/>  

          
          <Route exact path="/interior/:itemId" component={ItemPage}/>
          <Route exact path="/exterior/:itemId" component={ItemPage}/>
          <Route exact path="/kitchen/:itemId" component={ItemPage}/>

        </div>
      </Router>
    );
  }
}

export default App;






