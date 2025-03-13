import React, { Component } from 'react'
import axios from 'axios';
import Course from './Course';
import './Courses.css'

class Courses extends Component {

    state = {
        courses: null,
        courseId: null,
        courseName: null,
        courseDesc: null
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products').then(res => {
            // console.log(res.data);
            this.setState({ courses: res.data })
        });
    }

    addCourse = (event) => {
        event.preventDefault();
        console.log(this.state.courseName);
        console.log(this.state.courseDesc);
        axios.post('https://fakestoreapi.com/products', {
            courseName: this.state.courseName,
            courseDesc: this.state.courseDesc
        }).then(res => {
            console.log(res);
            
        }).catch(err => {
            console.log(err);
            
        })
        console.log('clicked');

    }

    changing = (event) => {
    }

    render() {
        return (
            <div className='container mt-3'>

                <div className="card p-3 mb-3">

                    <form onSubmit={this.addCourse}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Course Name:</label>
                            <input type="text" className="form-control" name="email" onChange={event => this.setState({courseName: event.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Course Description:</label>
                            <textarea type="text" className="form-control" name="pswd" onChange={event => this.setState({courseDesc: event.target.value})}/>
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
