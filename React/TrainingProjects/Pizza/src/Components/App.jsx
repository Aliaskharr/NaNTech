import React from 'react';
import Pizza from './Pizza';

const App = () => {

    let arr = [ 'Margarita', 'Express' ];

    return(
        <div>
            <Pizza list={arr}/>
        </div>
    )
}

export default App;