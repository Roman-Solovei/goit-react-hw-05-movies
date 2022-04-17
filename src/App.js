import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react"; 
import Navigation from 'components/Navigation/Navigation';
// import s from "./components/App.module.css";
const HomePage = lazy(() => import('components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('components/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('components/NotFoundPage/NotFoundPage'));


const App = () => { 
    return (
        <div>
            <Navigation />

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/movies/:movieId/*' element={<MovieDetailsPage />} />
                    <Route path='*' element={<NotFoundPage />} />               
                </Routes>
            </Suspense>         
        </div>
    );
}
export default App;