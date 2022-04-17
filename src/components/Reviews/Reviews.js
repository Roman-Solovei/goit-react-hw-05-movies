import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../ApiService/ApiService"
// import img from '../Image/film-null.jpg';


const FetchMovieReviews = () => {
    let{ movieId } = useParams();    
    const [movieReviews, setMovieReviews] = useState('');
   
    // console.log(movieId)
      console.log(movieReviews)
    useEffect(() => {
        fetchMovieReviews(movieId).then((review) => {
            setMovieReviews(review)         
        }).catch(error => alert(error))
    }, [movieId]);


    
    return( 
        <div>
  {movieReviews && movieReviews.results.length > 0 ? movieReviews.results.map(review => {
      return <div key={review.id}> <h4>{review.author}</h4>
          {/* { review.author_details.avatar_path ? <img src={`${review.author_details.avatar_path}`.slice(1)} alt={review.author}/> : < img src={img} width="80" height="80" alt='Foto' />} */}          
          <p>{review.content}</p>          
           </div>
            }) : <p> We don't have any reviews for this movie </p>}
    </div>
    )

}

export default FetchMovieReviews;