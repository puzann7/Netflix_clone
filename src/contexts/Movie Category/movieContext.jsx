import { createContext, useContext, useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../data/fetchReq";

const movieContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [mediaLoader, setMediaLoader] = useState(true);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setTrendingMovies(response);
        setMediaLoader(false);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <movieContext.Provider value={{ trendingMovies, mediaLoader }}>
      {children}
    </movieContext.Provider>
  );
};

const useMovieData = () => {
  return useContext(movieContext);
};
export default useMovieData;
