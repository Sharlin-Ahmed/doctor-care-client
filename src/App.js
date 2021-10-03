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
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard.jsx";
import AddDoctor from "./Components/AddDoctor/AddDoctor.jsx";
import NoMatch from "./Components/NoMatch/NoMatch.jsx";

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

          <Route path="*">
            <NoMatch></NoMatch>     
          </Route>

          <PrivateRoute path="/allPatients">
            <AllPatients />
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>     
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
