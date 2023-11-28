import './App.css';
import Home from './components/Home';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Navigate } from 'react-router-dom';

const AuthContext = React.createContext();


function App() {
  const isAuthenticated = useContext(AuthContext);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
