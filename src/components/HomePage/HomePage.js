import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import s from './HomePage.module.css';
import { fetchTrendingMovies } from '../ApiService/ApiService'

const HomePage = () => {
const [trandingMovies, setTrandingMovies] = useState("");
  
  useEffect(() => {
    fetchTrendingMovies()
        .then((movies) => {         
        setTrandingMovies(movies.results);
      })
      .catch((error) => alert(error));

    return () => setTrandingMovies("");
  }, []);

  return (
    <div>
      <p className={ s.title }>Tranding week</p>
      <ul className={ s.list }>
      {trandingMovies &&
              trandingMovies.map((movie) => {
                 
          return (
            <li key={movie.id}>
              {/* <li> */}
                <NavLink to={`/movies/${movie.id}`}>
                  {movie.title}
                </NavLink>
              {/* </li> */}
            </li>
          );
              })}
      </ul>
    </div>
  );    
}

export default HomePage;