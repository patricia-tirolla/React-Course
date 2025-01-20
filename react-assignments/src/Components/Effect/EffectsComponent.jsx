import React, { useState, useEffect } from 'react'

export function FetchAPIComponent() {
    const [data, setdata] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://thronesapi.com/api/v2/Characters');
                const json = (await res.json());
                setdata(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
}