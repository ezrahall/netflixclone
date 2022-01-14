import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import requests from "../../services/requests";
import style from "./Banner.module.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((res) => {
      setMovie(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
      );
    });
  }, []);

  return (
    <header
      className={style.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={style.banner_contents}>
        <h2 className={style.banner_title}>{movie?.name}</h2>
        <div className={style.banner_buttons}>
          <button className={style.banner_button}>Play</button>
          <button className={style.banner_button}>My List</button>
        </div>
        <h3 className={style.description}>{movie?.overview}</h3>
      </div>
      <div className={style.fade_bottom}></div>
    </header>
  );
}

export default Banner;
