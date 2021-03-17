import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';

import { addItem, subtractBudgetMoney } from '../actions'

const InputItem = () => {


    const budget = useSelector(state => state.budget)
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const item = {
            title: data.title,
            description: data.description,
            cost: data.cost
        }
        if (budget >= data.cost) {
            dispatch(subtractBudgetMoney(data.cost))
            dispatch(addItem(item))
        }
        else{
            alert('you dont have enough mmoney for this item')
        }



    }

    return (
        <div>
            <h4>add new item:</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Enter title:</label>
                <br />
                <input type="text" name="title" ref={register({ required: true })} />
                <br />
                <label>Enter description:</label>
                <br />
                <input type="text" name="description" ref={register({ required: true })} />
                <br />
                <label>Enter cost:</label>
                <br />
                <input type="number" name="cost" ref={register({ required: true })} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default InputItem;