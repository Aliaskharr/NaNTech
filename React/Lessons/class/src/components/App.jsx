import React from 'react';
import ReactDOM from 'react-dom/client';
import List from './List';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: null, index : 0 }
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => 
                this.setState({ name : json })
            )
    }
    next = () => {
        this.setState({index : this.state.index+1})
    }
    render() {
        if (this.state.name != null) {
            return (
                <div className='container w-50 mt-5'>
                    <button className='btn btn-info' onClick={this.next}></button>
                    <h1>{this.state.name[this.state.index].title}</h1>
                </div>
            )
        }
        else{
            <div>NUll</div>
        } 
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)