import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Data from "./pages/data";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Data} />
          <Route exact path="/data" component={Data} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
