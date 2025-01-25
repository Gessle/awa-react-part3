import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [dataType, setDataType] = useState<string>("posts")
    const [data, setData] = useState<string>("")

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${dataType}/1`)
        .then(response => response.json())
        .then(json => setData(JSON.stringify(json)))
    }, [dataType])

    return (
        <div>
            <h2>UseEffect</h2>
            <button onClick={() => setDataType("posts")}>Posts</button>
            <button onClick={() => setDataType("comments")}>Comments</button>
        
            <h3>{dataType}</h3>
            <p>{data}</p>
        
        </div>
    )
}

export default UseEffectDemo