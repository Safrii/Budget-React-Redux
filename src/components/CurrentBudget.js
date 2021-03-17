import React from 'react';
import { useSelector } from 'react-redux'; 

const CurrentBudget = () => {

    const currentBudget = useSelector(state => state.budget);

    return(
        <div>
            <h4>current budget: {currentBudget}</h4>
        </div>
    );
}

export default CurrentBudget;