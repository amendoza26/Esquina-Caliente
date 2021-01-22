import { useState } from 'react';
import './App.css';
import Header from './Components/Header'
import MenuItems from './Components/MenuItems'
import Cart from './Components/Cart';
import data from './data.json'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Components/Login'


function App() {

  const [ cartItems, setCartItems ] = useState(data);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home">
            <Header />
              <div className="app__menu">
                <MenuItems items={cartItems} setCartItems={setCartItems} />
                <Cart items={cartItems} />
              </div>
          </Route>
          <Route path="/">
            <Header />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
