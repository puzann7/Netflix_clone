import {createContext, useContext, useState, useEffect} from "react"
import { fetchTrending } from "../../data/fetchReq";

const movieContext = createContext();

export const MovieContextProvider = ({children})=> {
    const [trendings, setTrendings] = useState([]);
    useEffect(()=>{
        const getTrendings = async()=>{
            try {
                const response = await fetchTrending();

                setTrendings(response)

            } catch (error) {
                console.log(error);
            }
        }


        getTrendings();
    },[])

  return (
    <movieContext.Provider value={{trendings}}>
        {children}
    </movieContext.Provider>
  )
}

const useMovieData = ()=>{
    return useContext(movieContext)
}
export default useMovieData
