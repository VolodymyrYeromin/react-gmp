import './moviesSortBar.scss';
import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";

const MoviesSortBar = ({movies, setMoviesState}) => {
    const selectRef = useRef(null);
    const [selectValue, setSelectValue] = useState('date');

    useEffect(() => {
        setMoviesState([...movies].sort((a,b) => {
            return b[selectValue] - a[selectValue]
        }))
    }, [selectValue])

    return (
        <div className="movies-sort-bar">
            <span>
                Sort by
            </span>
            <div className="select_box">
                <select ref={selectRef} onChange={() => setSelectValue(selectRef.current.value)}>
                    <option value="date">Release date</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
        </div>
    )
};

MoviesSortBar.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired),
        url: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    })),
    setMoviesState: PropTypes.func.isRequired
};

export default MoviesSortBar;
