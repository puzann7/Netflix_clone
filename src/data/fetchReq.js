import axios from "axios";
import requests from "./apiUrl";
import { BASE_URL, API_KEY } from "./apiUrl";

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
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${categoryId}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export {fetchTrending, fetchCategory}
