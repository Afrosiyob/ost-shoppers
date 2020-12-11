import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import TopNav from "./components/TopNav/TopNav";
import Routes from "./Routes";

import "./App.scss";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Router>
        <TopNav />
        <main className="main-box-app">
          <Routes />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
