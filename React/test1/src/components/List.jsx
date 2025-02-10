import React from 'react';
import Item from './Item';

const List = (props) => {
    return (
        <ul className="list-group mt-5">
            {
                props.persons.map(x => {
                    return <Item name={x.name} age={x.age} />
                })
            }
        </ul>
    )
}

export default List;