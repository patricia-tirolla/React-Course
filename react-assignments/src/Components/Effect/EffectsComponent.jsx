import React, { useState, useEffect } from 'react'

export function FetchAPIComponent() {
    const [data, setdata] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://thronesapi.com/api/v2/Characters');
                const json = (await res.json());
                setdata(json);
                console.log(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <h1>Characters</h1>
            <ul>
            {data.map((character) => (
                <li key={character.id}>
                 {character.fullName}
                 </li>
              ))}
            </ul>
        </div>
    );
}