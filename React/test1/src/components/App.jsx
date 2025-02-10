import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const App = () => {
    const students = [
        {
            name : "Ali",
            age : "22"
        },
        {
            name : "Osman",
            age : "23"
        },
        {
            name : "Veli",
            age : "27"
        }
    ]

    const teachers = [
        {
            name : "M1",
            age : "22"
        },
        {
            name : "M2",
            age : "23"
        },
        {
            name : "M3",
            age : "27"
        }
    ]
    return (
        <div className='container w-50'>
            <List persons={students}/>
            <List persons={teachers}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)