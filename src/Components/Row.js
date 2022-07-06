import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import "./Row.css";

import movieTrailer from "movie-trailer";

const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ url, title, isRowLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(url);
      setMovies(response.data.results);
    }
    getMovies();
  }, [url]);
  console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => alert("Movie Trailer Not Found"));
    }
  };

  return (
    <React.Fragment>
      <div className="row">
        <h2 className="row_title">{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => (
            <img
              className={`row_poster ${isRowLarge && "row_posterLarge"}`}
              onClick={() => handleClick(movie)}
              style={{ cursor: "pointer" }}
              key={movie.id}
              src={`${imgBaseUrl}${
                isRowLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || movie?.title}
            />
          ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </React.Fragment>
  );
};

export default Row;
