import React, { useEffect, useState } from "react";
import './App.css';
import tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from './components/Header'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {

    const loadAll = async () => {
      //pegar a lista total
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      setfeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  useEffect(() => {

    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true)
      } else {
        setblackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, [])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lista">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito acompanhando a live da B7Web.
        Direitos de imagem para Netflix.<br />
        dados pegos do site Themoviedb.org.
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://blog.motionisland.com/wp-content/uploads/2022/03/Loading_1.gif" alt="loader"></img>
        </div>
      }

    </div>
  )
}