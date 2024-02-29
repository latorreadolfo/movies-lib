import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Search, Movie } from "../pages";
import { Navbar, Footer } from "../components";
import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

const InitRoutes = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} />
        {/* <body> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie:id" element={<Movie />} />
        </Routes>
        {/* </body> */}
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default InitRoutes;
