import styles from './moviesSortBar.module.scss';
import {useRef} from "react";
import constants from "../../../constants";
import {useRouter} from "next/router";
import {FC} from "react";

const MoviesSortBar:FC = () => {
    const selectRef = useRef(null);
    const nextRouter = useRouter();

    return (
        <div className={styles.moviesSortBar}>
            <span>
                Sort by
            </span>
            <div className={styles.selectBox}>
                <select ref={selectRef} onChange={()=>{}} defaultValue={nextRouter.query.sortBy}>
                    {constants.sorting.map(sorting => {
                         return <option key={sorting.value} value={sorting.value}>{sorting.title}</option>
                    })}
                </select>
            </div>
        </div>
    )
};

export default MoviesSortBar;
