import React from 'react';
import './item.css'
const Item = (props) => {
    return(
        <h1 className='qirmizi'>{props.name}</h1>
    )
}

export default Item;