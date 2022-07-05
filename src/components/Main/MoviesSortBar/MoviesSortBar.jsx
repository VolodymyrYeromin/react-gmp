import './moviesSortBar.scss';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {setSortingValue} from "../../../redux/features/sortFilterBar/sortFilterBarSlice";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {sortings} from "../../../constants";

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
                    {sortings.map(sorting => {
                        return <option key={sorting.value} value={sorting.value}>{sorting.title}</option>
                    })}
                </select>
            </div>
        </div>
    )
};

export default MoviesSortBar;
