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
      <Header />
      <Divider />
      <Navbar />
      <Divider />
      <MemeGenerator />
      <Router>
        <Link to="/memes" class="item">All Memes</Link>
        <Switch>
          <Route path="/memes">
            <AllMemes />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}


export default App;
