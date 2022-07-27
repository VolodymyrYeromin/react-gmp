import styles from "./clickedMovieDetails.module.scss"
import searchImage from '../../../public/assets/SearchButton.png'
import {useSelector} from "react-redux";
import Link from "next/link";
import Image from "next/image";

const transformDuration = (numberOfMinutes) => {
    let string = `${Math.floor(numberOfMinutes / 60)}h `;
    if (numberOfMinutes % 60 < 10) {
        string += `0${numberOfMinutes % 60} min`;
    } else {
        string += `${numberOfMinutes % 60} min`;
    }
    return string;
};

const ClickedMovieDetails = () => {
    const selectedMovie = useSelector(state => state.selectedMovie.movie);

    return (
        <div className={styles.clickedMovieDetails}>
            <div className={styles.movieDetailsHeader}>
                <Link href="/"><a className="logo">netflixroulette</a></Link>
                <button className="search-movie-btn" onClick={()=>{}}><Image src={searchImage} height={30} width={30} alt="search"/></button>
            </div>
            <div className={styles.movieDetailsBody}>
                <img className={styles.movieDetailsImg} src={selectedMovie.poster_path} alt={selectedMovie.title}/>
                <div className={styles.movieDetailsInfo}>
                    <div className={styles.movieHeading}>
                        <h2>{selectedMovie.title}</h2>
                        <div className={styles.rating}>{selectedMovie.vote_average}</div>
                    </div>
                    <p className={styles.genres}>{selectedMovie.genres ? selectedMovie.genres.map((genre, index) => {
                        return index < selectedMovie.genres.length - 1 ? `${genre}, ` : genre
                    }) : null}</p>
                    <span className={styles.year}>{selectedMovie.release_date ? selectedMovie.release_date.substring(0, 4) : null}</span>
                    <span className={styles.length}>{transformDuration(selectedMovie.runtime)}</span>
                    <div className={styles.description}>{selectedMovie.overview}</div>
                </div>
            </div>
        </div>
    );
};

export default ClickedMovieDetails;
