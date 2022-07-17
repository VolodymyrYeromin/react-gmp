import './moviesSortBar.scss';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import constants from "../../../constants";
import useQuery from "../../../hooks/useQuery";
import {useNavigate, useParams} from "react-router-dom";
import useDidMountEffect from "../../../hooks/useDidMountEffect";
import useCustomNavigation from "../../../hooks/useCustomNavigation";

const MoviesSortBar = () => {
    const dispatch = useDispatch();
    const selectRef = useRef(null);

    const navigate = useNavigate();
    const {searchQuery} = useParams();
    const query = useQuery();
    const sortBy = query.get(constants.queryParams.SORT_BY);
    const genre = query.get(constants.queryParams.GENRE);
    const movie = query.get(constants.queryParams.MOVIE);

    useDidMountEffect(() => {
        console.log(searchQuery)
        if (sortBy) {
            dispatch(getMovies({searchQuery, sorting: sortBy, filtering: genre}));
        }
    }, [sortBy])

    const sortMovies = () => {
        useCustomNavigation({navigate, searchQuery, genre, sortBy: selectRef.current.value, movie});
    }

    return (
        <div className="movies-sort-bar">
            <span>
                Sort by
            </span>
            <div className="select_box">
                <select ref={selectRef} onChange={sortMovies}>
                    {constants.sorting.map(sorting => {
                        if (sortBy === sorting.value) {
                            return <option key={sorting.value} value={sorting.value} selected>{sorting.title}</option>
                        } else {
                            return <option key={sorting.value} value={sorting.value}>{sorting.title}</option>
                        }
                    })}
                </select>
            </div>
        </div>
    )
};

export default MoviesSortBar;
