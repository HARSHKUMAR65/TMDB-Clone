const useSingleMovie = async id => {
    const apiURL = import.meta.env.VITE_REACT_APP_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        apiURL
      }&language=en&append_to_response=videos%2Ccasts%2Crecommendations%2Cexternal_ids`,
    );
    const resJSON = await res.json();
    return resJSON;
  };

  export default useSingleMovie;
