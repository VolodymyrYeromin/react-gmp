import './moviesSortBar.scss';
import {useRef, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {sortings} from "../../../constants";
import useQuery from "../../../hooks/hooks";
import {useNavigate, useParams} from "react-router-dom";

const MoviesSortBar = () => {
    const dispatch = useDispatch();
    const selectRef = useRef(null);

    const navigate = useNavigate();
    const {searchQuery} = useParams();
    const query = useQuery();
    const sortBy = query.get("sortBy");
    const genre = query.get("genre")

    useEffect(() => {
        dispatch(getMovies({searchQuery, sorting: sortBy, filtering: genre}));
    }, [sortBy])

    return (
        <div className="movies-sort-bar">
            <span>
                Sort by
            </span>
            <div className="select_box">
                <select ref={selectRef} onChange={() => {
                    navigate(`${searchQuery ? `/search/${searchQuery}` : '/search'}?${genre ? `genre=${genre}&` : ''}sortBy=${selectRef.current.value}`);
                }}>
                    {sortings.map(sorting => {
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
