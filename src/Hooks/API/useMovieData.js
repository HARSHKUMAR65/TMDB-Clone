const apiURL = import.meta.env.VITE_REACT_APP_API_KEY
const useMovieData = async (page, year, sort) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        apiURL
      }&language=en&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&primary_release_year=${year}`,
    );
    const resJSON = await res.json();
    return resJSON;
  };


export default useMovieData;