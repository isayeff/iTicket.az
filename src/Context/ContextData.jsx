import React, { createContext, useEffect, useState } from 'react'

export const CntxData = createContext()

function ContextData({children}) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch("../data/db.json")
        .then(res => res.json())
        .then(item => setData(item))
    },[])
    // console.log(data);

    return (
        <>
            <CntxData.Provider value={data}>
                {children}
            </CntxData.Provider>
        </> 
    )
}

export default ContextData