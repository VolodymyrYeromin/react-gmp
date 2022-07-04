import './moviesFilterBar.scss';
import {useDispatch} from "react-redux";
import {setFilterValue} from "../../../redux/features/sortFilterBar/sortFilterBarSlice";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import constants from "../../../constants";
import {useState} from "react";

const MoviesFilterBar = () => {
    const categoriesArray = [constants.genres.ALL, constants.genres.DOCUMENTARY, constants.genres.COMEDY, constants.genres.HORROR, constants.genres.CRIME];
    const [activeElement, setActiveElement] = useState(0);
    const dispatch = useDispatch();
    const makeElementActive = (index) => {
        setActiveElement(index);
    }

    return (
        <ul className="movies-filter-bar">
            {categoriesArray.map((element, index) => {
                const className = activeElement === index ? "filter-active" : null;
                return <li key={index} className={className} onClick={() => {
                    makeElementActive(index);
                    dispatch(setFilterValue(element));
                    dispatch(getMovies());
                }}>{element}</li>
            })}
        </ul>
    )
};

export default MoviesFilterBar;
