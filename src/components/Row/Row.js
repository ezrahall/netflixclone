import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../../services/axios";
import style from "./Row.module.css";

const baseURL = "https://image.tmdb.org/t/p/original";
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState("");

  let scrollPos = 0;

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  //To be used for future scrolling feature

  // const scrollRight = (event) => {
  //   scrollPos += 500;
  //   event.target.previousSibling.scroll({
  //     top: 0,
  //     left: scrollPos,
  //     behavior: "smooth",
  //   });
  // };

  // const scrollLeft = (event) => {
  //   scrollPos -= 500;
  //   event.target.nextSibling.scroll({
  //     top: 0,
  //     left: scrollPos,
  //     behavior: "smooth",
  //   });
  // };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerId) {
      setTrailerId("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).searchParams);
          setTrailerId(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
          setTrailerId("");
        });
    }
  };

  return (
    <div>
      <h2 className={style.title}>{title}</h2>
      <div className={style.row}>
        {/* <button onMouseDown={(event) => scrollLeft(event)}>Back</button> */}
        <div className={style.row_posters}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={style.row_poster}
              onClick={() => {
                handleClick(movie);
              }}
              src={`${baseURL}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
        </div>

        {/* <button
          className={style.back_button}
          onMouseDown={(event) => scrollRight(event)}
        >
          Forward
        </button> */}
      </div>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </div>
  );
}

export default Row;
