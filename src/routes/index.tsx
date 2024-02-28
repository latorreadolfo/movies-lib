import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Search, Movie } from "../pages";
import { Navbar, Footer } from "../components";
import GlobalStyle from "../styles/globalStyles";

function InitRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie:id" element={<Movie />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default InitRoutes;
