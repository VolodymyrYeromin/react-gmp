import './moviesList.scss';
import MovieCard from "./MovieCard/MovieCard";

const MoviesList = ({movies}) => {
    return (
        <>
            <div className="total-movies"><span>{movies.length}</span> movies found</div>
            <div className="movies-list">
                {movies.map((movie, index)=> {
                    return (
                        <MovieCard key={index} movie={movie} />
                    )
                })}
            </div>
        </>
    )
}
export default MoviesList;
