import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MemeGenerator from "./MemeGenerator";
// import {Link} from 'react-router';

function Navbar() {
  return (
    <div class="ui container">
      <div class="ui secondary menu">
        <Router>
          <Link to="/" class="active item">Home</Link>
          <Link to={"/memes"} class="item">All Memes</Link>
          <Link to="/memes1" class="item">My Memes</Link>
          <div class="right menu">
            <Link to="/users" class="item">Sign Up</Link>
            <Link to="/sessions" class="item">Login</Link>
            <Link to="/sessions" class="item">Logout</Link>
          </div>
          <Route exact path="/" component={MemeGenerator} />
          <Route exact path="/memes" component={AllMemes} />
          {/* <Route exact path="/" component={MemeGenerator} /> */}
        </Router>
      </div>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function AllMemes() {
  return <h2>All Memes</h2>;
}

function MyMemes() {
  return <h2>My Memes</h2>;
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


export default Navbar