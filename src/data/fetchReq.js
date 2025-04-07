import axios from "axios";
import requests from "./apiUrl";

const fetchTrending =  async ()=>{
    try {
        const response = await axios.get(requests.fetchTrending);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

const fetchCategory = async (categoryId)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${categoryId}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

const fetchMovieTrailer = async  (movieId) =>{
    if(!movieId) return;
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movie/${movieId}/videos?api_key=${import.meta.env.VITE_API_KEY}`)
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}
//   fetchTVTrailer: (tvId) => `${BASE_URL}/tv/${tvId}/videos?api_key=${API_KEY}`,

export {fetchTrending, fetchCategory, fetchMovieTrailer}
