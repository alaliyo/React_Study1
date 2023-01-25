/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movies({ id, coverImg, title, summary, genres, num, year}) {
    return (
        <div className={styles.movie}>
            <div className={styles.movie_felx}>
                <img src={coverImg} className={styles.movie__img}/>
                <div>
                    <h2 className={styles.movie__title}>
                        <Link to={`/movie/${id}`} target='_blank' >{num}. {title}</Link>
                    </h2>
                    <h3 className={styles.movie__year}> {year}</h3>
                    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                    <ul className={styles.movie__genres}>genres: &nbsp;
                        {genres.map(g => <li key={g}>{g}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

Movies.propTypes = {
    num: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genrse: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;