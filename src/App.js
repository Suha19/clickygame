import React from 'react';
import './App.css';
import Cards from "./components/Cards";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
function app() {

  return (
    <div>
      <Header />
      <Jumbotron/>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Footer/>
    </div>
  );

}

export default app;
