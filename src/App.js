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

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Meme Generator</Link>
              </li>
              <li>
                <Link to="/allmemes">All Memes</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/allmemes">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <MemeGenerator />;
}

function About() {
  return <AllMemes />;
}

function Users() {
  return <h2>Users</h2>;
}





















// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Divider />
//       <Navbar />
//       <Divider />
//       <MemeGenerator />
//       <Router>
//         <Link to="/memes" class="item">All Memes</Link>
//         <Switch>
//           <Route path="/memes">
//             <AllMemes />
//           </Route>
//         </Switch>
//       </Router>
//     </div>

//   );
// }


// export default App;
