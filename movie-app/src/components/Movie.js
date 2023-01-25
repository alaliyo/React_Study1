/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movies({ id, coverImg, title, summary, genres, num}) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`} target='_blank' >{num}. {title}</Link>
            </h2>
            <img src={coverImg} />
            <p>{summary}</p>
            <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
            <hr />
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