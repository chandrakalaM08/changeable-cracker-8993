import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from "./admin/Components/AppHeader"
import SideMenu from "./admin/Components/SideMenu"
import PageContent from "./admin/Components/PageContent"

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
    </div>
  );
}

export default App;
