import React, { useState, useEffect } from 'react';
import MealItem from './MealItem';

const Meals = () => {
    const [mealsData, setMealsData] = useState([]);

    useEffect(() => {
        // Defined as an IIFE (Immediately Invoked Function Expression) for cleanliness
        (async () => {
            try {
                const response = await fetch('http://localhost:3001/meals');
                if (!response.ok) {
                    
                    throw new Error(`Failed to fetch meals: ${response.status}`);
                }
                const mealsData = await response.json();
                setMealsData(mealsData);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        })();
    }, []); 

    return (
        <ul id="meals">
            {mealsData.map(meal => (

                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}

export default Meals;
