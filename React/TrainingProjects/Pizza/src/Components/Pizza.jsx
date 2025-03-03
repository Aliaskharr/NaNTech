import React from "react";

const Pizza = (props) => {

    // console.log(props);
    
    return(
        <div>
            {
                props.list.map(e => {
                    return <h1>{e} pizza</h1>
                })
            }
        </div>
    )
}

export default Pizza;