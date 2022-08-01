import styles from "./clickedMovieDetails.module.scss"
import searchImage from '../../../public/assets/SearchButton.png'
import Link from "next/link";
import Image from "next/image";
import {movieType} from "../../types";
import {FC} from "react";

const transformDuration = (numberOfMinutes: number) : string => {
    let string = `${Math.floor(numberOfMinutes / 60)}h `;
    if (numberOfMinutes % 60 < 10) {
        string += `0${numberOfMinutes % 60} min`;
    } else {
        string += `${numberOfMinutes % 60} min`;
    }
    return string;
};

const ClickedMovieDetails: FC<{movie: movieType}> = ({movie}) => {
    return (
        <div className={styles.clickedMovieDetails}>
            <div className={styles.movieDetailsHeader}>
                <Link href="/"><a className="logo">netflixroulette</a></Link>
                <button className="search-movie-btn" onClick={()=>{}}><Image src={searchImage} height={30} width={30} alt="search"/></button>
            </div>
            <div className={styles.movieDetailsBody}>
                <img className={styles.movieDetailsImg} src={movie.poster_path} alt={movie.title}/>
                <div className={styles.movieDetailsInfo}>
                    <div className={styles.movieHeading}>
                        <h2>{movie.title}</h2>
                        <div className={styles.rating}>{movie.vote_average}</div>
                    </div>
                    <p className={styles.genres}>{movie.genres ? movie.genres.map((genre, index) => {
                        return index < movie.genres.length - 1 ? `${genre}, ` : genre
                    }) : null}</p>
                    <span className={styles.year}>{movie.release_date ? movie.release_date.substring(0, 4) : null}</span>
                    <span className={styles.length}>{transformDuration(movie.runtime)}</span>
                    <div className={styles.description}>{movie.overview}</div>
                </div>
            </div>
        </div>
    );
};

export default ClickedMovieDetails;
