import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../ApiService/ApiService";
import s from './MovieCast.module.css';
import img from '../Image/film-null.jpg';




const FetchMovieCast = () => {
    let{ movieId } = useParams();    
    const [movieCast, setMovieCast] = useState('');
   
    // console.log(movieId)
    //   console.log(movieCast)
    useEffect(() => {
        fetchMovieCast(movieId).then((credits) => {
            setMovieCast(credits.cast);
        }).catch(error => alert(error));

    }, [movieId]);

    return (
        <div>
            <ul>
                {movieCast && movieCast.length > 0 ? movieCast.map(cast => <li key={cast.credit_id} className={ s.cast}> {cast.profile_path ? <img src={`http://image.tmdb.org/t/p/w92/${cast.profile_path}`} alt={cast.name}
                /> : < img src={img} width="92" alt='Foto' />}
                    <p>Name: {cast.name}</p>
                    <p>Character: {cast.character}</p>
                </li>) : <p>No cast info for this movie</p>}
            </ul>
        </div>
    );

}

export default FetchMovieCast;