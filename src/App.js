import React, { useEffect , useState} from 'react';
import Tmdb from './Tmdb.js';
import MovieRow from './components/MovieRow.js';
import '../src/css/App.css';
import FeaturedMovie from './components/FeaturedMovie.js';
import Header from './components/Header.js';
import styled from 'styled-components';

export default function App() { 

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
    window.removeEventListener('scroll', scrollListener);
    }
  }, []);

    return (
      <div className="page">

        <Header black={blackHeader}/>
        {featuredData && <FeaturedMovie item={featuredData}/>}

        <section className="lists" >
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>
        <Footer>
            Direitos de imagem para Netflix<br/>
            Dados pegos do site Themoviedb.org
        </Footer>

        {movieList.length <= 0 &&    
            <div className="loading">
              <img src="https://64.media.tumblr.com/280c10ef121ea37d973fcc035cf62222/tumblr_mvdumiXwAe1qmxr4zo1_400.gif" alt="Carregando" />
            </div>
        }

      </div>
    );
    
};

const Footer = styled.div`  
  text-align: center;
  font-size: 10px;
  line-height: 20px;
  padding-bottom: 40px;
  overflow: hidden;
`