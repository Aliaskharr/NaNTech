import React from 'react';
import ReactDOM from 'react-dom/client';
import Item from './Item';

class App extends React.Component {
    state = { name: null, index : 0 };
    next = () => {
        this.setState({index : this.state.index+1})
    }
    componentDidMount(){
        console.log('Mount');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => 
                this.setState({ name : json })
            )

            
        console.log('constructor');
    }
    componentDidUpdate(){
        console.log('update');
    }
    componentWillUnmount(){

    }
    render() {
        console.log('render');
        
        if (this.state.name != null) {
            return (
                <div className='container w-50 mt-5'>
                    <button className='btn btn-info' onClick={this.next}></button>
                    <Item name={this.state.name[this.state.index].title}></Item>
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