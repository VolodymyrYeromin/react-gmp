import "./searchBar.scss";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useQuery from "../../../hooks/hooks";

const SearchBar = () => {
    const {searchQuery} = useParams();
    const navigate = useNavigate();
    const query = useQuery();
    const genre = query.get("genre");
    const sortBy = query.get("sortBy");

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            search_query: ''
        },
        onSubmit: (values) => {
            if (genre) {
                navigate(`${values.search_query ? `/search/${values.search_query}` : '/search'}?genre=${genre}${sortBy ? `&sortBy=${sortBy}` : ''}`);
            } else {
                navigate(`${values.search_query ? `/search/${values.search_query}` : '/search'}${sortBy ? `?sortBy=${sortBy}` : ''}`);
            }
        }
    })
    useEffect(() => {
        formik.setFieldValue('search_query', searchQuery ? searchQuery : '', false);
        dispatch(getMovies({searchQuery, sorting: sortBy, filtering: genre}));
    }, [searchQuery])

    return (
        <div className="search-block">
            <h1>Find your movie</h1>
            <form onSubmit={formik.handleSubmit} className="search-bar">
                <input className="search-query" name="search_query" type="text" placeholder="What do you want to watch?" value={formik.values.search_query} onChange={formik.handleChange}/>
                <input className="search-button" type="submit" value="Search"/>
            </form>
        </div>
    );
};

export default SearchBar;
