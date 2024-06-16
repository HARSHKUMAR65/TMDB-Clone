const usePopularMoviesData = async page => {
    const apiurl = import.meta.env.REACT_APP_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        apiurl
      }&language=en&page=${page}`,
    );
    const resJSON = res.json();
    return resJSON;
  };

  export default usePopularMoviesData;