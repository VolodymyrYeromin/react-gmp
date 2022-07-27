import {store} from "../../src/redux/store";
import App from "../../src/App";
import {Provider} from "react-redux";
import {sortings} from "../../src/helpers";
import constants from "../../src/constants";

export async function getServerSideProps({query}) {
    let res
    if (query.filter === 'all') {
        res = await fetch(`${constants.BASE_URL}?sortBy=${query.sortBy ? query.sortBy : sortings().RELEASE_DATE}&sortOrder=desc&search=${query.search ? query.search : ''}&searchBy=title`)
    } else {
        res = await fetch(`${constants.BASE_URL}?sortBy=${query.sortBy ? query.sortBy : sortings().RELEASE_DATE}&sortOrder=desc&search=${query.search ? query.search : ''}&searchBy=title&filter=${query.filter ? query.filter : ''}`)
    }
    const movies = await res.json()
    return {
        props: {
            movies,
        },
    }
}

function Search({movies}) {
    return (
        <Provider store={store}>
            <App movies={movies} />
        </Provider>
    )
}

export default Search
