import {store} from "../../src/redux/store";
import App from "../../src/App";
import {Provider} from "react-redux";
import {sortings} from "../../src/helpers";
import constants from "../../src/constants";

export async function getServerSideProps({query}) {
    let responseMovies
    let responseSelectedMovie
    let movie
    if (query.filter === 'all') {
        responseMovies = await fetch(`${constants.BASE_URL}?sortBy=${query.sortBy ? query.sortBy : sortings().RELEASE_DATE}&sortOrder=desc&search=${query.search ? query.search : ''}&searchBy=title`)
    } else {
        responseMovies = await fetch(`${constants.BASE_URL}?sortBy=${query.sortBy ? query.sortBy : sortings().RELEASE_DATE}&sortOrder=desc&search=${query.search ? query.search : ''}&searchBy=title&filter=${query.filter ? query.filter : ''}`)
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
        <Provider store={store}>
            <App movies={movies} movie={movie} />
        </Provider>
    )
}

export default Search
