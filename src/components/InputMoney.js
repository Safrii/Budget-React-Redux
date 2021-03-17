import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addBudgedMoney } from '../actions';

const InputMoney = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(addBudgedMoney(data.budgetForm))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Enter your budget(you can later increase budget,just enter amount you want to add to current budget):</label>
                <br />
                <input type="number" name="budgetForm" ref={register({required: true})} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default InputMoney;
  