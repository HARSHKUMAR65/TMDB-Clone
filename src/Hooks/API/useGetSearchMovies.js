const useGetSearchQueryMovie = async (page, query) => {
    const apiURL = process.env.REACT_APP_API_KEY
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        apiURL
      }&language=en-US&query=${query}&page=${page}&include_adult=false`,
    );
    const resJSON = await res.json();
    return resJSON;
  };

  export default useGetSearchQueryMovie;