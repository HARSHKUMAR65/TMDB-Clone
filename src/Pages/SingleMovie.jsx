import useSingleMovie from "../Hooks/API/useSingleMovie";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const SingleMovie = () => {
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([]);
    const [recomendaion, setRecomendation] = useState([])
    const Location = useLocation();
    const id = Location.pathname.split("/")[2]

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await useSingleMovie(id);
                setMovie(res);
                setGenres(res.genres);
                setRecomendation(res.recommendations.results);
                console.log(res);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };
        fetchMovies();
    }, [id]);

    return (
        <>
            <div className="movie w-full max-w-7xl m-auto mt-1 object-cover ">
                <div className="movie__intro">
                    <img className="movie__backdrop w-full h-96 object-cover" src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster w-48 h-64 rounded-md shadow-md transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg" src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name text-3xl font-bold">{movie?.original_title}</div>
                            <div className="movie__rating flex items-center">
                                <i className="bx bxs-star text-orange-500"></i>
                                <span className="movie__voteCount text-lg text-gray-600">{movie?.vote_average}</span>
                            </div>
                            <div className="movie__runtime text-lg text-gray-600">{movie?.runtime} mins</div>
                            <div className="movie__releaseDate text-lg text-gray-600">{movie?.release_date}</div>
                            <div className="movie__genres">
                                <ul className="movie__genreList flex flex-wrap">
                                    {genres.map((genre) => {
                                        return <li className="movie__genre mr-2 text-lg text-gray-600">{genre.name}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText text-lg font-bold">Synopsis</div>
                            <div className="text-lg text-gray-600">{movie?.overview}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default SingleMovie;