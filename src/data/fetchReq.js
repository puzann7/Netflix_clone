import axios from "axios";
import requests from "./apiUrl";
const fetchTrending =  async ()=>{
    try {
        const response = await axios.get(requests.fetchTrending);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {fetchTrending}
