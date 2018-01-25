import { Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import Kitchen from './pages/Kitchen';
import Interior from './pages/Interior';
import Exterior from './pages/Exterior';
import ItemPage from './pages/ItemPage';
import ItemCard from './components/ItemCard';
import Navbar from "./components/Navbar/Navbar";
//import connect function from react-redux library. Connect funtion gives certain components the ability to call action creators
import { connect } from "react-redux";
import Profile from "./pages/Profile";
//import all our action creators from action file
import * as actions from "./actions";

class App extends Component {
  componentDidMount(){
    this.props.getUser();
    console.log(this.props)
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar/>
           
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/kitchen" component={Kitchen}/>
          <Route exact path="/interior" component={Interior}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/exterior" component={Exterior}/>  
          
          <Route exact path="/interior/:itemId" component={ItemPage}/>
          <Route exact path="/exterior/:itemId" component={ItemPage}/>
          <Route exact path="/kitchen/:itemId" component={ItemPage}/>
        </div>
      </Router>
    );
  }
}
// wiring up the connect function with out App component. That way our App component has access to all the actions as its props. 
export default connect(null, actions) (App);






