import styles from './moviesFilterBar.module.scss';
import constants from "../../../constants";
import {useRouter} from "next/router";
import {FC} from "react";

const MoviesFilterBar:FC = () => {
    const categoriesArray = constants.genres;
    const nextRouter = useRouter();

    return (
        <ul className={styles.moviesFilterBar}>
            {categoriesArray.map((element, index) => {
                if (index === 0 && (!nextRouter.query.filter || nextRouter.query.filter === 'all')) {
                    return <li key={index} className={styles.filterActive} onClick={() => {}}>{element}</li>
                } else if (index !== 0 && element === nextRouter.query.filter) {
                    return <li key={index} className={styles.filterActive} onClick={() => {}}>{element}</li>
                } else {
                    return <li key={index} onClick={() => {}}>{element}</li>
                }
            })}
        </ul>
    )
};

export default MoviesFilterBar;
