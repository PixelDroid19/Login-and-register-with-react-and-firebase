import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import 'bulma/css/bulma.min.css';

//
const firebaseConfig = {
  apiKey: "AIzaSyDbG_HzdynsMS95ro6i8u3V5k9oE5yysGU",
  authDomain: "fir-day-d648c.firebaseapp.com",
  projectId: "fir-day-d648c",
  storageBucket: "fir-day-d648c.appspot.com",
  messagingSenderId: "738376689151",
  appId: "1:738376689151:web:e802ccf09758f210eeb3ca",
  measurementId: "G-CLM1SX34HF"
};

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
