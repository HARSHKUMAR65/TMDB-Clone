import { useState, useEffect } from 'react';
import useMovieData from '../Hooks/API/useMovieData';

const Home = () => {
  const [pages, setPages] = useState(1);
  const [year, setYear] = useState(2022);
  const [sort, setSort] = useState('popularity.desc');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await useMovieData(pages, year, sort);
        setMovies(res.results);
        console.log(res);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchMovies();
  }, [pages, year, sort]);

  return (
    <>
      <h1>Home</h1>
      <div>
        <button
          onClick={() => {
            setPages(pages - 1);
          }}
        >
          Previous Page
        </button>
        <button
          onClick={() => {
            setPages(pages + 1);
          }}
        >
          Next Page
        </button>
        <button
          onClick={() => {
            setYear(year - 1);
          }}
        >
          Previous Year
        </button>
        <button
          onClick={() => {
            setYear(year + 1);
          }}
        >
          Next Year
        </button>
        <button
          onClick={() => {
            setSort('popularity.desc');
          }}
        >
          Sort by Popularity
        </button>
        <button
          onClick={() => {
            setSort('popularity.asc');
          }}
        >
          Sort by Popularity
        </button>
      </div>

      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
