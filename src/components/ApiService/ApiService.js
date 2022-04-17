

const BASIC_URL = 'https://api.themoviedb.org/3/';
const KEY = '80ee4206e07196c72de8abd9e50bf90a';

export function fetchTrendingMovies() {    
    return (
        fetch(`${BASIC_URL}trending/movie/week?api_key=${KEY}`).then(response => {                    
                // console.log(response.json())                       
                return response.json()                         
            }
        )
    )
};


export function fetchSearchMovies(queryValue) { 
    return (
        fetch(`${BASIC_URL}search/movie?api_key=${KEY}&query=${queryValue}`).then(response => {                    
                // console.log(response.json())                       
                return response.json()                         
            }
        )
    )
};

export function fetchMovieDetails(movie_id) { 
    return (
        fetch(`${BASIC_URL}movie/${movie_id}?api_key=${KEY}`).then(response => {                    
                // console.log(response.json())                       
                return response.json()                         
            }
        )
    )
};

export function fetchMovieCast(movie_id) { 
    return (
        fetch(`${BASIC_URL}movie/${movie_id}/credits?api_key=${KEY}`).then(response => {                  
              return response.json()                         
            }
        )
    )
};

export function fetchMovieReviews(movie_id) {
    return fetch(
      `${BASIC_URL}movie/${movie_id}/reviews?api_key=${KEY}`
    )
      .then((response) => {
        return response.json();
      })
  }