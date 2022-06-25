import './moviesFilterBar.scss';
import {useDispatch} from "react-redux";
import {setFilterValue} from "../../../redux/features/sortFilterBar/sortFilterBarSlice";
import {getMovies} from "../../../redux/features/movies/moviesSlice";

const MoviesFilterBar = () => {
    const categoriesArray = ["All", "Documentary", "Comedy", "Horror", "Crime"];
    const dispatch = useDispatch();
    const makeElementActive = (e) => {
        if(!e.target.classList.contains("filter-active")) {
            document.querySelector(".filter-active").classList.remove("filter-active");
            e.target.classList.add("filter-active");
        }
    }

    return (
        <ul className="movies-filter-bar">
            {categoriesArray.map((element, index) => {
                if(index === 0) {
                    return <li key={index} className="filter-active" onClick={(e) => {
                        makeElementActive(e);
                        dispatch(setFilterValue(element));
                        dispatch(getMovies());
                    }}>{element}</li>
                } else {
                    return <li key={index} onClick={(e) => {
                        makeElementActive(e);
                        dispatch(setFilterValue(element));
                        dispatch(getMovies());
                    }}>{element}</li>
                }
            })}
        </ul>
    )
};

export default MoviesFilterBar;
