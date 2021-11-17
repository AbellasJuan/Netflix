import React, { useEffect , useState} from 'react';
import './styles/App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow.js';

export default function App() { 

  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    const loadAll = async ()=> {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

    return (
      <div className="page">
              <section className="lists" >
          {movieList.map((movieData, key) => (
            <MovieRow key={key} props={movieData}/>
          ))}
        </section>
      </div>
    );
    
};

