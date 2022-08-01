import App from "../../src/App";
import {sortings} from "../../src/helpers";
import constants from "../../src/constants";

export async function getServerSideProps({query, params}) {
    let responseMovies
    let responseSelectedMovie
    let movie
    if (query.filter === 'all') {
        responseMovies = await fetch(`${constants.BASE_URL}?sortBy=${query.sortBy ? query.sortBy : sortings().RELEASE_DATE}&sortOrder=desc&search=${params ? params.searchQuery : ''}&searchBy=title`)
    } else {
        responseMovies = await fetch(`${constants.BASE_URL}?sortBy=${query.sortBy ? query.sortBy : sortings().RELEASE_DATE}&sortOrder=desc&search=${params ? params.searchQuery : ''}&searchBy=title&filter=${query.filter ? query.filter : ''}`)
    }
    if(query.movie) {
        responseSelectedMovie = await fetch(`${constants.BASE_URL}/${query.movie}`);
        movie = await responseSelectedMovie.json();
    } else {
        movie = null
    }

    const movies = await responseMovies.json();
    return {
        props: {
            movies,
            movie
        },
    }
}

function Search({movies, movie}) {
    return (
        <App movies={movies} movie={movie} />
    )
}

export default Search
