import React from "react"
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { DataProvider } from "./GlobalState";
import Header from "./header/Header"
import MainPages from "./MainPages"


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}


export default App;
