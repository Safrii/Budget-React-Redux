import React from 'react';
import { useDispatch } from 'react-redux';
import { addBudgedMoney, removeItem } from '../actions';

const Item = (props) => {

    const dispatch = useDispatch();

    const removeArrayItem = () => {
        const moneyReturn = props.item.cost;
        dispatch(removeItem(props.item));
        dispatch(addBudgedMoney(moneyReturn));
    }

    return(
        <div>
            <hr/>
            <p>{props.item.title}</p>
            <p>{props.item.description}</p>
            <p>{props.item.cost}</p>
            <input type="button" value="remove" onClick={removeArrayItem} />
        </div>
    );


}

export default Item;