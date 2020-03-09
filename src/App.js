import React from 'react';
import {BrowserRouter as Router, Route , Switch,Redirect} from "react-router-dom";
import { render } from '@testing-library/react';
import MainPage from "./pages";
import NotFound from "./pages/404";
import Training from "./pages/training";

function App() {
  render()
  // eslint-disable-next-line no-lone-blocks
  {return <Router>
      <Switch>
      <Route exact path="/Exposys" component={MainPage}/>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/404" component ={NotFound}/>
      <Route exact path="/training" component ={Training}/>
      <Redirect to="/404" />

      </Switch>
    </Router>
    
  }
}


export default App;
