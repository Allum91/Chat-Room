import React, {createContext, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Register from './components/Register/Register.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';


export const UserContext = createContext({});

function App() {

  const [user, setUser] = useState('');
  const data = {
    user,
    setUser
}

  return (<>
    <UserContext.Provider value={data}>
    <Router>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
   </>
  );
}

export default App;
