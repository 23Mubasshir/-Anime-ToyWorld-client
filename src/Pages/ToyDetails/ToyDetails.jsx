import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const {quantity, price, description} = toy
    return (
        <div>
            <h1>This is toy details</h1>
            <h1>Toy details: {price}</h1>
        </div>
    );
};

export default ToyDetails;