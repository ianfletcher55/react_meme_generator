import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import MemeGenerator from './MemeGenerator';
import Divider from './Divider';
import AllMemes from './AllMemes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Divider />
        <Navbar />
        <Divider />
        <Switch>
          <Route exact path="/">
            <MemeGenerator />
          </Route>
          <Route path="/memes">
            <AllMemes />
          </Route>
          <Route path="/memes">
            <MyMemes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function MyMemes() {
  return <div>My Memes</div>;
}
function SignUp() {
  return <h2>Sign Up</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Logout() {
  return <h2>Logout</h2>;
}


export default App;