import { Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Homepage } from './pages/Homepage';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div classname = "head"> Hello  World</div>
//     );
//   }
// }

// export default App;


class App extends Component {
  render() {
    return (
      <Router>
        <div>


          <Navbar />
           
          <Route exact path="/" component={Homepage}/>


        </div>
      </Router>
    );
  }
}

export default App;


