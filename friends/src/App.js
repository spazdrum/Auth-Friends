import React from "react";
import logo from "./logo.svg";
import "./App.css";

import loginForm from "./components/loginForm";
import friendsList from "./components/friendsList";
import privateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/login">Login</Link>
        </header>

        <Switch>
          <privateRoute exact path="/friends" component={friendsList} />
          <Route path="login" component={loginForm} />
          <Route component={loginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
