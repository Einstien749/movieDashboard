import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Search } from "./pages/search";
import { Home } from "./pages/home";
import { Details } from "./pages/details";
import { getRatedMovies } from "./services";
import { useState, useLayoutEffect } from "react";

function App() {
  const [movies, setMovies] = useState<any[]>([]);
  const getMovies = async () => {
    const response = await getRatedMovies();
    setMovies(response);
  };
  useLayoutEffect(() => {
    getMovies();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home movies={movies}/>} />
      <Route path="/details" element={<Details movies={movies}/>} />
      <Route path="/search" element={<Search movies={movies}/>} />
    </Routes>
  );
}

export default App;
