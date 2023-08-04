import React from "react";
import Header from "./Header";
import "./App.css";
import Movie from "./Movie";
import movies from "./movie.json";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">{movies.map((element) => {
        return(
        <Movie
        key={element.imdbID}
        title={element.Title}
        year={element.Year}
        img={element.Poster}
        />)
      })}</div>
    </div>
  );
}

export default App;
