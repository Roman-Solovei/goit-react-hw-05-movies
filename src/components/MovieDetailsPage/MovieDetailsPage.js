import { useEffect, useState, lazy, Suspense } from 'react';
import { NavLink, useParams, Routes, Route } from 'react-router-dom';
import { createBrowserHistory }  from 'history';
import { fetchMovieDetails } from '../ApiService/ApiService';
import img from '../Image/film-null.jpg';
import s from './MovieDetailsPage.module.css';
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));


const FetchMovieDetails = () => {

    let history = createBrowserHistory();
    let { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState("");    
    // console.log(movieId)

    useEffect(() => {
        fetchMovieDetails(movieId).then(movie => {
            // console.log(movie);
            setMovieDetails(movie);
        }).catch(error => alert(error));
    }, [movieId]);

    return (
        <div className={ s.detailsPage}>

            <button type="button" onClick={() => { history.back() }} >
                Go back
            </button>

            {
                movieDetails && (
                    <>
                        <div className={ s.details }>
                        {movieDetails.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`} alt={movieDetails.title} /> : < img src={img} width="300" alt='Poster' />}
                        
                            <div className={ s.info }>
                                <h1 className={ s.filmInfo}> {movieDetails.title} ({`${movieDetails.release_date}`.slice(0,-6)}) </h1>
                            <p className={ s.filmInfo}>User Score : {movieDetails.vote_average}</p>
                            <h3 className={ s.filmInfo}>Overwiew</h3>
                            <p className={ s.filmInfo}> {movieDetails.overview}</p>
                            <h3 className={ s.filmInfo}>Genres</h3>
                                <ul className={ s.genre}>
                                {movieDetails.genres && movieDetails.genres.map(genre => <li key={genre.id} className={ s.genreList}> {genre.name} </li>)}
                            </ul>
                            </div>
                        </div>    
                        <div className={ s.additional }>
                            <h3>Additional information</h3>
                            <NavLink to="cast" className={ s.infoList}>
                                Cast
                            </NavLink>
                            <NavLink to="reviews" className={ s.infoList}>
                                Reviews
                            </NavLink>
                        </div>
                    </>
                )
            }
            
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="cast" element={<MovieCast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Routes>
            </Suspense>

        </div>
    )
};

export default FetchMovieDetails;