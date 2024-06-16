const usePopularTvShow = async page => {
    const apiurl = process.env.REACT_APP_API_KEY;
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${
        apiurl
      }&language=en&page=${page}`,
    );
    const resJSON = res.json();
    return resJSON;
  };
  export default usePopularTvShow;