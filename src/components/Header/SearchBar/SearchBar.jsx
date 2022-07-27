import styles from "./searchBar.module.scss";
import {useFormik} from "formik";
import {useRouter} from "next/router";

const SearchBar = () => {
    const nextRouter = useRouter();
    const formik = useFormik({
        initialValues: {
            search_query: ''
        },
        // onSubmit: (values) => {
        //     useCustomNavigation({navigate, searchQuery: values.search_query, genre, sortBy});
        // }
    })

    return (
        <div className={styles.searchBlock} data-testid="search-block">
            <h1>Find your movie</h1>
            <form onSubmit={formik.handleSubmit} className={styles.searchBar}>
                {/*works but question*/}
                {/*<input className={styles.searchQuery} name="search_query" type="text" placeholder="What do you want to watch?" value={nextRouter.query.search} onChange={formik.handleChange} data-testid="search-input"/>*/}

                <input className={styles.searchQuery} name="search_query" type="text" placeholder="What do you want to watch?" value={formik.values.search_query} onChange={formik.handleChange} data-testid="search-input"/>
                <input className={styles.searchButton} type="submit" value="Search" data-testid="search-button"/>
            </form>
        </div>
    );
};

export default SearchBar;
