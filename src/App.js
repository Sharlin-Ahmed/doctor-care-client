import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home/Home/Home.jsx";
import Appointment from "./Components/Appointment/Appointment/Appointment.jsx";
import Login from "./Components/Login/Login/Login.jsx";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute.jsx";
import AllPatients from "./Components/AllPatients/AllPatients.jsx";

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/appointment">
            <Appointment />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path="/allPatients">
            <AllPatients />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
