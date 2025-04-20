import axios from "axios";
import requests from "./apiUrl";
import { useEffect } from "react";


const fetchTrendingMovies =  async ()=>{
    try {
        const response = await axios.get(requests.fetchTrending);
        console.log(requests.fetchTrending);

        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}
const fetchLatestMovies = async ()=>{
    try {
        const res = await axios.get(requests.fetchLatestMovies);
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
}
const fetchAllMovies = async (page)=>{
        try {
            const res = await axios.get(requests.fetchAllMovies,{
                params:{
                    page
                }
            })
            console.log(res.data.results);
        } catch (error) {
            console.log(error);

        }

}

const fetchCategory = async (categoryId)=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${categoryId}`);
        return response.data.results;
        setMediaLoader(false)

    } catch (error) {
        console.log(error);
    }
}

const fetchMovieTrailer = async  (movieId) =>{
    if(!movieId) return;
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/movie/${movieId}/videos?api_key=${import.meta.env.VITE_API_KEY}`)
        return response.data.results;
        setMediaLoader(false)
    } catch (error) {
        console.log(error);
    }
}
//   fetchTVTrailer: (tvId) => `${BASE_URL}/tv/${tvId}/videos?api_key=${API_KEY}`,

export {fetchTrendingMovies, fetchCategory, fetchMovieTrailer, fetchLatestMovies, fetchAllMovies}
