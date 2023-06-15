import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 import AllRoutes from './routes/AllRoutes';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AllRoutes/>  */}
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
