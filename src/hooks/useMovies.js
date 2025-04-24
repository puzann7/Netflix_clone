import React from 'react'
import { useState, useEffect } from 'react'
import { fetchAllMovies } from '../data/fetchReq';

function useMovies(pageNum) {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({});
    const [hasError, setHasError] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
        setError({});

        const controller = new AbortController();
        const {signal} = controller;
        fetchAllMovies(pageNum, {signal})
        .then((data)=>{
            setResults(()=> data);
            setHasNextPage(Boolean(data.length));
            setIsLoading(false);
        })
        .catch((e)=>{
            setIsLoading(false);
            if(signal.aborted) return;
            setHasError(true);
            setError({message: e.message})
        })
        return ()=> controller.abort();
    }, [pageNum])

    return {results, isLoading, error, hasError, hasNextPage}
}



export default useMovies
