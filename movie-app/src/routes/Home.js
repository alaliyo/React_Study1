import { useState, useEffect } from 'react';
import Movies from '../components/Movie';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    const getMovies = async () => {
      const json = await (
        await fetch (
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
  
    useEffect(() => {
      getMovies();
    }, [])



    return (
        <div>
          <h1>영화를 소개합니다</h1>
          <hr />
          {loading ? <h3>Loading...</h3> : <div>{
            movies.map((item, index) => (
              <Movies
                num={index + 1}
                key={item.id}
                id={item.id}
                coverImg={item.medium_cover_image}
                title={item.title}
                summary={item.summary}
                genres={item.genres}
              />
            ))}
            </div>
          }
        </div>
      );
}

export default Home;