import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home/Home/Home.jsx";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route>
          
        </Route> */}
        {/* <Route>
          
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
