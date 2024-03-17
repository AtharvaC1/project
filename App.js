import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/">
              <Home />
            </Route>
          </Routes>
        </div>
        </BrowserRouter>
      </div>
  );
}

export default App;