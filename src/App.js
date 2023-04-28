import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";


export default () => {

  const [movieList, setMovieList]= useState([])

  useEffect(() => {
    const loadAll = async () => {
      //pegar a lista total
      let list = await tmdb.getHomeList()
      setMovieList(list);
    }

    loadAll();
  })

  return (
    <div className="page">
        <section className="lista">
          {movieList.map((item, key)=>(
            <MovieRow key={key} />
          ))}
        </section>

    </div>
  )
}