import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const { id } = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        console.log(movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {loading ? <h3>Loading...</h3> : <div>
                <h1>{movie.title}</h1>
                {/* eslint-disable-next-line jsx-a11y/alt-text*/}
                <img src={movie.large_cover_image} />
                <h3>genres : {`${movie.genres}`}</h3>
                <span>description : {movie.description_full
}</span>
            </div>
            }
        </div>
    );
}

export default Detail;