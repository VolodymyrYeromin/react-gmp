import './moviesSortBar.scss';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {setSortingValue} from "../../../redux/features/sortFilterBar/sortFilterBarSlice";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import constants from "../../../constants";

const MoviesSortBar = () => {
    const dispatch = useDispatch();
    const selectRef = useRef(null);

    return (
        <div className="movies-sort-bar">
            <span>
                Sort by
            </span>
            <div className="select_box">
                <select ref={selectRef} onChange={() => {
                    dispatch(setSortingValue(selectRef.current.value));
                    dispatch(getMovies());
                }}>
                    <option value={constants.sorting.RELEASE_DATE}>Release date</option>
                    <option value={constants.sorting.VOTE_AVERAGE}>Rating</option>
                </select>
            </div>
        </div>
    )
};

export default MoviesSortBar;
