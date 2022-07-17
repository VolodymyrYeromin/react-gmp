import './moviesFilterBar.scss';
import {useDispatch} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import constants from "../../../constants";
import {useState} from "react";
import useQuery from "../../../hooks/useQuery";
import {useNavigate, useParams} from "react-router-dom";
import useDidMountEffect from "../../../hooks/useDidMountEffect";
import useCustomNavigation from "../../../hooks/useCustomNavigation";

const MoviesFilterBar = () => {
    const categoriesArray = constants.genres;
    const [activeElement, setActiveElement] = useState( 0);

    const navigate = useNavigate();
    const {searchQuery} = useParams();
    const query = useQuery();
    const sortBy = query.get(constants.queryParams.SORT_BY);
    const genre = query.get(constants.queryParams.GENRE);
    const movie = query.get(constants.queryParams.MOVIE);

    useDidMountEffect(() => {
        getFilteredMovies(categoriesArray.indexOf(genre), genre, searchQuery)
    }, [genre])

    const dispatch = useDispatch();

    const makeElementActive = (index) => {
        setActiveElement(index);
    }
    const getFilteredMovies = (index, element, searchQuery) => {
        makeElementActive(index === -1 ? 0 : index);
        dispatch(getMovies({searchQuery, filtering: element === constants.genres[0] ? '' : element, sorting: sortBy}));
    }

    const navigateGenre = (element) => {
        if (element !== constants.genres[0]) {
            useCustomNavigation({navigate, searchQuery, genre: element, sortBy, movie});
        }  else {
            useCustomNavigation({navigate, searchQuery, sortBy, movie});
        }
    }

    return (
        <ul className="movies-filter-bar">
            {categoriesArray.map((element, index) => {
                const className = activeElement === index ? "filter-active" : null;
                return <li key={index} className={className} onClick={() => navigateGenre(element)}>{element}</li>
            })}
        </ul>
    )
};

export default MoviesFilterBar;
