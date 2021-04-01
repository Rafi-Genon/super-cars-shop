import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import AddSuperCar from './Components/AddSuperCars/AddSuperCars';
import Login from './Components/LogIn/Login';
import Cart from './Components/Cart/Cart';
import { createContext, useState } from 'react';
import Navbar from './Components/NavBar/NavBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const userContext = createContext()

function App() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    photo: '',
    error: '',
    // success: false,
    // destinationConfirm: false
  })

  return (
    <div>
      <userContext.Provider value={[userDetails, setUserDetails]} >
        <Router>
          <Navbar></Navbar>
          <div>
            
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/addCar">
                <AddSuperCar />
              </Route>
              <PrivateRoute path="/addToCart">
                <Cart></Cart>
              </PrivateRoute>
              <Route path="/log-in">
                <Login></Login>
              </Route>

              <Route path="/*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
