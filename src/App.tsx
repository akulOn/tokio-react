import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import About from "./componenets/About/About";
import Footer from "./componenets/Footer/Footer";
import Gallery from "./componenets/Gallery/Gallery";
import Header from "./componenets/Header/Header";
import Home from "./componenets/Home/Home";
import MenuPage from "./componenets/MenuPage/MenuPage";

function App() {
  return (
    <>
      <Header />
      <Container style={{ marginTop: "5em" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
