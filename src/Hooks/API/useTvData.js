const useTvData = async (page, year, sort) => {
    const apiURL = import.meta.env.VITE_REACT_APP_API_KEY
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${
        apiURL
      }&language=en&sort_by=${sort}&first_air_date_year=${year}&page=${page}`,
    );
    const resJSON = await res.json();
    return resJSON;
  };
  
  export default useTvData;