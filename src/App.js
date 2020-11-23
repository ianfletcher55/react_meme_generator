import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import MemeGenerator from './MemeGenerator';
import Divider from './Divider';

function App() {
  return (
    <div>
      <Header />
      <Divider />
      <Navbar />
      <Divider />
      <MemeGenerator />
    </div>

  );
}

export default App;
