import React from 'react';

const Item = (props) => {
    console.log(props);
    return(
        <li className="list-group-item">{props.name} - {props.age}</li>
    )
}

export default Item;