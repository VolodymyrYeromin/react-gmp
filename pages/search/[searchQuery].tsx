import App from "../../src/App";
import { getServerSideProps } from "./index";

export { getServerSideProps }

function SearchedMovies({movies, movie}) {
    return (
        <App movies={movies} movie={movie} />
    )
}

export default SearchedMovies
