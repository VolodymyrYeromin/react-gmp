import './main.scss';
import MoviesFilterBar from "./MoviesFilterBar/MoviesFilterBar";
import MoviesSortBar from "./MoviesSortBar/MoviesSortBar";
import MoviesList from "./MoviesList/MoviesList";
import ErrorBoundary from "./ErrorBoundary";

const Main = ({movies}) => {
    return (
        <main>
            <div className="main-heading">
                <MoviesFilterBar />
                <MoviesSortBar />
            </div>
            <ErrorBoundary>
                <MoviesList movies={movies} />
            </ErrorBoundary>
        </main>
    )
};

export default Main;
