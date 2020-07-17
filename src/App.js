import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Students from "./components/Products/Products";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Students} />
      <Route path="/details/:id" render={(props) => <Details {...props} />} />
      <Footer />
    </Router>
  );
}

export default App;
