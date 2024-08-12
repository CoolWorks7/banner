import React, { useEffect } from 'react'

export default function Dashboard() {
    useEffect(() => {
        // async function updateData() {
        //     await fetch("http://localhost:3000/api/banner/update", {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({isVisible: true, description: "Hello There, I am Satyaprakash.", timer: 30})
        //     })
            

            
        // }

        // updateData()
        
    }, [0])

    return (
    <div>Dashboard</div>
    )
}
