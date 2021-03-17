import React from 'react';

import InputMoney from './InputMoney';
import CurrentBudget from './CurrentBudget';
import InputItem from './InputItem';
import ItemList from './ItemList'

const App = () => {
    return (
        <div>
            <InputMoney />
            <hr/>
            <CurrentBudget />
            <hr />
            <InputItem />
            <hr />
            <ItemList />
        </div>
    );
}

export default App;