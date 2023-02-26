import React from "react";
import { useState, useCallback, useRef, useEffect } from "react";


export const useFetch = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const activeHttpRequests = useRef([]);
    const sendRequest = useCallback(async (url, method= 'GET', body = null, headers={}) => {    
    
    setIsLoading(true)
    const httpAbortCtrl= new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl) 
    try{
        const response = await fetch(url,{
            method,
            headers, 
            body,
            signal: httpAbortCtrl.signal
        })
        const responseData = await response.json();
        if(!response.ok){
            throw new Error(responseData.message);
        }
        return responseData;
        
        }
    catch(error){
        setError(error.message)
    }
    const closeError =() => {
        setError(null)
    }
    // useEffect(()=>{
    //     return() =>{
    //         activeHttpRequests.current.forEach(aboutCtrl => aboutCtrl.aboutCtrl());
    //     }
    // },[])
    return(isLoading, error,sendRequest, closeError);
}, [])
}