import styles from "./searchBar.module.scss";
import {useFormik} from "formik";
import {useRouter} from "next/router";
import {FC} from "react";
import useCustomNavigation from "../../../hooks/useCustomNavigation"

const SearchBar:FC = () => {
    const nextRouter = useRouter();
    const formik = useFormik({
        initialValues: {
            search_query: nextRouter.query.searchQuery ? nextRouter.query.searchQuery : ''
        },
        onSubmit: (values) => {
            useCustomNavigation({navigate: nextRouter.push, searchQuery: values.search_query, genre: nextRouter.query.genre, sortBy: nextRouter.query.sortBy, movie: nextRouter.query.movie});
        }
    })

    return (
        <div className={styles.searchBlock} data-testid="search-block">
            <h1>Find your movie</h1>
            <form onSubmit={formik.handleSubmit} className={styles.searchBar}>
                <input className={styles.searchQuery} name="search_query" type="text" placeholder="What do you want to watch?" value={formik.values.search_query} onChange={formik.handleChange} data-testid="search-input"/>
                <input className={styles.searchButton} type="submit" value="Search" data-testid="search-button"/>
            </form>
        </div>
    );
};

export default SearchBar;
