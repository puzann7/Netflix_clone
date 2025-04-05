import {createContext, useContext, useState, useEffect} from "react"
import { fetchTrending } from "../../data/fetchReq";

const movieContext = createContext();

function MovieContextProvider({children}) {
    const [trendings, setTrendings] = useState({});
    useEffect(()=>{
        const getTrendings = async()=>{
            try {
                const response = await fetchTrending();
                setTrendings(response)
            } catch (error) {
                console.log(error);
            }
        }
    },[])
  return (
    <movieContext.Provider>
        {children}
    </movieContext.Provider>
  )
}
