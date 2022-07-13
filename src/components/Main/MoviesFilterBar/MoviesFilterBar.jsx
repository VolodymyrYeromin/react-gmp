import './moviesFilterBar.scss';
import {useDispatch} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {genres} from "../../../constants";
import {useEffect, useState} from "react";
import useQuery from "../../../hooks/hooks";
import {useNavigate, useParams} from "react-router-dom";

const MoviesFilterBar = () => {
    const categoriesArray = genres;
    const [activeElement, setActiveElement] = useState( 0);

    const navigate = useNavigate();
    const {searchQuery} = useParams();
    const query = useQuery();
    const genre = query.get("genre");
    const sortBy = query.get("sortBy");

    useEffect(() => {
        getFilteredMovies(categoriesArray.indexOf(genre), genre, searchQuery)
    }, [genre])

    const dispatch = useDispatch();

    const makeElementActive = (index) => {
        setActiveElement(index);
    }
    const getFilteredMovies = (index, element, searchQuery) => {
        makeElementActive(index === -1 ? 0 : index);
        dispatch(getMovies({searchQuery, filtering: element === 'all' ? '' : element, sorting: sortBy}));
    }

    const navigateGenre = (element) => {
        if (element !== 'all') {
            navigate(`${searchQuery ? `/search/${searchQuery}` : '/search'}?genre=${element}${sortBy ? `&sortBy=${sortBy}` : ''}`)
        } else {
            navigate(`${searchQuery ? `/search/${searchQuery}` : '/search'}${sortBy ? `?sortBy=${sortBy}` : ''}`)
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
