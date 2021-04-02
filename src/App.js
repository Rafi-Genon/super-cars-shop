import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import AddSuperCar from './Components/AddSuperCars/AddSuperCars';
import Login from './Components/LogIn/Login';
import Cart from './Components/Cart/Cart';
import { createContext, useState } from 'react';
import Navbar from './Components/NavBar/NavBar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CheckOut from './Components/CheckOut/CheckOut';
import Admin from './Components/Admin/Admin';
import ManageCars from './Components/ManageCars/ManageCars';
import MyOrders from './Components/MyOrders/MyOrders';
export const userContext = createContext()

function App() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: ''
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
              <PrivateRoute path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              <PrivateRoute path="/addCar">
                <AddSuperCar />
              </PrivateRoute>
              <PrivateRoute path="/manageCars">
                <ManageCars></ManageCars>
              </PrivateRoute>
              <PrivateRoute path="/myOrders">
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path="/addToCart">
                <Cart></Cart>
              </PrivateRoute>
              <Route path="/log-in">
                <Login></Login>
              </Route>
              <Route path="/checkOut">
                <CheckOut></CheckOut>
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
