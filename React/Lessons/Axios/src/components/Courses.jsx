import React, { Component } from 'react'
import axios from 'axios';
import Course from './Course';
import './Courses.css'

class Courses extends Component {

    state = {
        courses: null,
        currerntCourse : {
            
        }
        }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products').then(res => {
            // console.log(res.data);
            this.setState({ courses: res.data })
        });
    }

    addCourse = (event) => {
        event.preventDefault();
        console.log('clicked');
        
    }

    render() {
        return (
            <div className='container mt-3'>

                <div className="card p-3 mb-3">

                    <form onSubmit={this.addCourse}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Course Name:</label>
                            <input type="text" className="form-control" name="email" />
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Course Description:</label>
                            <textarea type="text" className="form-control" name="pswd" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className="row">
                    {

                        this.state.courses != null ?
                            this.state.courses.map(course => {

                                return (
                                    <Course course={course} key={course.id} />
                                )
                            })

                            : ''
                    }
                </div>
            </div>

        )
    }
}

export default Courses;
