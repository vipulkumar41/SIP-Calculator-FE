import React from 'react';
import './media/CSS/App.css';
import Nav from './uiCollection/Calculator/SIP Calculator/Nav.js';
import First from './uiCollection/Calculator/SIP Calculator/first.js';
import Side from './uiCollection/Calculator/SIP Calculator/sidebar.js'

function App() {
  return (
    <div>
    <Side/>
    <Nav/>
    <First/>
    </div>
  );
}

export default App;
