import React, { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        async function getData() {
            let res = await fetch("http://localhost:3000/api/banner")
            let data = await res.json()
            console.log(data);
            
        }

        getData()
        
    }, [0])

    // Loader
    // Light mode/ Dark Mode
    // toggle button for banner visibility
    // slider for banner visibility
    // 

    return (
        <div>index</div>
    )
}
