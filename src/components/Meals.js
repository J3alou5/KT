import React, { useState, useEffect } from 'react';

const Meals = () => {
    useEffect(() => {
        // Fetch data from backend server
        fetch('http://localhost:3001/meals') // Adjust the URL based on your backend server configuration
            .then(response => response.json())
            .then(data => console.log(data)) // Log the fetched data to the console
            .catch(error => console.error('Error fetching meals:', error));
    }, []);

    return (
        <div>
            {/* You can render the fetched data in your component as needed */}
            <h2>Meals</h2>
            {/* Placeholder content for now */}
        </div>
    );
}

export default Meals;