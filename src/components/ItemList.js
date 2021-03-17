import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item'

const ItemList = () => {

    const itemList = useSelector(state => state.budgetItemList);

    const renderList = () => {
        return itemList.map((item,index) => {
            return(
                <div key={index}>
                    <Item item={item} />
                    <p>{index}</p>
                </div>
            );;
        })
        
    }

    return(
        <div>
            {renderList()}
        </div>
    );
}

export default ItemList;