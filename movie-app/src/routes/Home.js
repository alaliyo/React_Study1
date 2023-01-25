import { useState, useEffect } from 'react';
import Movies from '../components/Movie';
import styles from "./Home.module.css";

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
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
          <span>Loading...</span>
        </div>
        ) : <div className={styles.movies}>{
          movies.map((item, index) => (
            <Movies
              num={index + 1}
              key={item.id}
              id={item.id}
              year={item.year}
              coverImg={item.large_cover_image}
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