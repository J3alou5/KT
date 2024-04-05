import React, { useState, useEffect } from 'react';

const Meals = () => {
    // Initialize state to hold meals data
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:3001/meals')
            .then(response => response.json()) 
            .then(data => setMeals(data)) 
            .catch(error => console.error('Error fetching meals:', error));
    }, []);

    return (
        <div>
            <h2>Meals</h2>
            <ul>
                {/* Map over meals state to render each meal */}
                {meals.map((meal, index) => (
                    <li key={index}>{meal.name}</li> 
                ))}
            </ul>
        </div>
    );
}

export default Meals;
