const getSingleTvShow = async id => {
    const apiURL = import.meta.env.VITE_REACT_APP_API_KEY
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${
        apiURL
      }&language=en&append_to_response=external_ids%2Cvideos%2Crecommendations%2Ccredits`,
    );
    const resJSON = await res.json();
    return resJSON;
  };

  export default getSingleTvShow;