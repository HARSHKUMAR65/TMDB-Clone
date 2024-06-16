const useTopRatedTvs = async page => {
    const apiurl = process.env.REACT_APP_API_KEY
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en&page=${page}`,
    );
    const resJSON = res.json();
    return resJSON;
  };

  export default useTopRatedTvs;