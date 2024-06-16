import { useState, useEffect } from 'react';
import useMovieData from '../Hooks/API/useMovieData';
import { Link } from 'react-router-dom';

const Home = () => {
    const [pages, setPages] = useState(1);
    const [year, setYear] = useState(2024);
    const [sort, setSort] = useState('popularity.desc');
    const [movies, setMovies] = useState([]);
    const [MovieData, setMovieData] = useState([]);
    const SortBy = ['popularity.desc', 'release_date.desc', 'revenue.desc', 'primary_release_date.desc', 'original_title.asc', 'vote_average.desc', 'vote_count.desc'];
    const years = Array.from({ length: 2024 - 1901 + 1 }, (v, i) => 1901 + i);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await useMovieData(pages, year, sort);
                setMovies(res);
                setMovieData(res.results);
                console.log(res.results);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };
        fetchMovies();
    }, [pages, year, sort]);

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-8">Explore New Movies and TV Shows</h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl font-semibold mb-2">Sort By</h2>
                            <select
                                className="w-full md:w-64 p-2 border rounded-md bg-white shadow-sm"
                                value={sort}
                                onChange={handleSortChange}
                            >
                                {SortBy.map((s) => (
                                    <option key={s} value={s}>
                                        {s.replace('_', ' ')}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Year</h2>
                            <select
                                className="w-full md:w-64 p-2 border rounded-md bg-white shadow-sm"
                                value={year}
                                onChange={handleYearChange}
                            >
                                {years.map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto py-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                        {MovieData.map((movie) => (
                            <div key={movie.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750'}
                                        alt={movie.title}
                                        className="w-full h-64 object-cover "
                                    />
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-2">{movie.title}</h2>
                                        <p className="text-gray-700 mb-4 line-clamp-3">
                                            {movie.overview}
                                        </p>
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center">
                                                <img
                                                    src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : 'https://via.placeholder.com/64'}
                                                    alt="avatar"
                                                    className="w-8 h-8 rounded-full mr-2 object-cover"
                                                />
                                                <span className="text-gray-800 font-semibold">{movie.original_title}</span>
                                            </div>
                                            <span className="text-gray-600 text-sm">{new Date(movie.release_date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="text-gray-700 text-sm space-y-1">
                                            <p><strong>Language:</strong> {movie.original_language}</p>
                                            <p><strong>Popularity:</strong> {movie.popularity}</p>
                                            <p><strong>Vote Average:</strong> {movie.vote_average}</p>
                                            <p><strong>Vote Count:</strong> {movie.vote_count}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
