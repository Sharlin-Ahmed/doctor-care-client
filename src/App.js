import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home/Home/Home.jsx";
import Appointment from "./Components/Appointment/Appointment/Appointment.jsx";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route>
          <Appointment path="appointment"/>
        </Route>
        {/* <Route>
          
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
