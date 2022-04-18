import { useEffect, useState } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
// import  {createBrowserHistory}  from 'history';
import { fetchSearchMovies } from '../ApiService/ApiService';
import s from './MoviePage.module.css';



const FetchSearchMovies = () => {
  const [movies, setMovies] = useState("");
  const [queryValue, setQueryValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // const history = createBrowserHistory();
    
  useEffect(() => {
    // console.log(location.search)
    if (location.search) {
      fetchSearchMovies(location.search)
        .then((movies) => {
          setMovies(movies)
        }).catch((error) => alert(error))
      }
  }, [location.search]);
 

  function onSubmit(event) {
    event.preventDefault();
    setMovies(""); 
    setQueryValue("");
        
    fetchSearchMovies(queryValue.trim())
      .then((movies) => {
        setMovies(movies);
      }).catch((error) => alert(error))
    
     navigate({search: `&query=${queryValue}` });
  };

  function handleChange(event) {  
    setQueryValue(event.target.value)        
  };

  return (
    <div className={ s.search }>
      <form onSubmit={onSubmit}>
        <input value={queryValue} onChange={handleChange} />
        <button>Search...</button>
      </form>
      <ul className={ s.list }>
        {movies &&
          movies.results.map((movie) => {
            return (
              <NavLink
                key={movie.id}
                to={{
                  pathname: `/movies/${movie.id}`
                }}><li>{movie.title}</li>
              </NavLink>
            );
          })}
      </ul>
    </div>
  );   
};

export default FetchSearchMovies;