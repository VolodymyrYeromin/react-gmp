import './moviesFilterBar.scss';
import {useDispatch} from "react-redux";
import {setFilterValue} from "../../../redux/features/sortFilterBar/sortFilterBarSlice";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {genres} from "../../../constants";
import {useState} from "react";

const MoviesFilterBar = () => {
    const categoriesArray = genres;
    const [activeElement, setActiveElement] = useState(0);
    const dispatch = useDispatch();
    const makeElementActive = (index) => {
        setActiveElement(index);
    }
    const getFilteredMovies = (index, element) => {
        makeElementActive(index);
        dispatch(setFilterValue(element));
        dispatch(getMovies());
    }

    return (
        <ul className="movies-filter-bar">
            {categoriesArray.map((element, index) => {
                const className = activeElement === index ? "filter-active" : null;
                return <li key={index} className={className} onClick={() => getFilteredMovies(index, element)}>{element}</li>
            })}
        </ul>
    )
};

export default MoviesFilterBar;
