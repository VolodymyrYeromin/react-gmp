import "./searchBar.scss";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {useNavigate, useParams} from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import constants from "../../../constants";
import useDidMountEffect from "../../../hooks/useDidMountEffect";
import useCustomNavigation from "../../../hooks/useCustomNavigation";
import {useEffect} from "react";

const SearchBar = () => {
    const {searchQuery} = useParams();
    const navigate = useNavigate();
    const query = useQuery();
    const sortBy = query.get(constants.queryParams.SORT_BY);
    const genre = query.get(constants.queryParams.GENRE);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            search_query: ''
        },
        onSubmit: (values) => {
            useCustomNavigation({navigate, searchQuery: values.search_query, genre, sortBy});
        }
    })
    useDidMountEffect(() => {
        dispatch(getMovies({searchQuery, sorting: sortBy, filtering: genre}));
    }, [searchQuery]);

    useEffect(() => {
        formik.setFieldValue('search_query', searchQuery ? searchQuery : '', false);
    }, []);

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
