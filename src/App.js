import "./App.css";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import React, { useContext } from "react";
import AuthContext from "./components/auth/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

// const AuthContext = React.createContext();

function App() {
  const isAuthenticated = useContext(AuthContext);
  console.log("Is authenticated: ", isAuthenticated);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          isAuthenticated={isAuthenticated}
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
