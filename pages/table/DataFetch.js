import React, { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';

function DataFetch() {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(fetchResponse => setData(fetchResponse))
    }, [])
    return (
        <>
            {data.slice(0, 2).map((d, i) => {
                return <h1>{d.title}</h1>
            })
            }
        </>
    )
}

export default DataFetch