import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AllRoutes/> */}
      <Footer/>
    </div>
  );
}

export default App;
