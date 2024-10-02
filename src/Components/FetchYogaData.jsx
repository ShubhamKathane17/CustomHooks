import React from 'react';
import UseFetch from './UseFetch';

const FetchYogaData = () => {
    // Use the custom hook to fetch data from the Yoga API
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');

    // Log the data to check if it's being fetched correctly
    console.log(data);

    return (
        <ul className='list_data_main'>
            <h1 className='usefetch_heading'>
               Fetch Yoga Data</h1>
            {data && data.map((e, index) => (
                <li key={index} className='list_data'>
                    <h3>{e.name}</h3>
                    <p><strong>Benefits: </strong>{e.benefits}</p>
                    <p><strong>Duration : </strong>{e.time_duration}</p>
                </li>
            ))}
        </ul>
    );
};

export default FetchYogaData;
