import styles from "./searchBar.module.scss";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
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

    useEffect(() => {
        formik.setFieldValue('search_query', nextRouter.query.search ? nextRouter.query.search : '', false);
    }, []);
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
