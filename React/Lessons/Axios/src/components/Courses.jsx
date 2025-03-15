import React, { Component } from 'react';
import axios from 'axios';
import Course from './Course';
import './Courses.css';

import AddCourse from './addCourse';

class Courses extends Component {

    state = {
        courses: null,
        courseId: null,
        courseName: null,
        courseDescription: null
    }

    componentDidMount() {
        axios.get('http://localhost:5000/courses').then(res => {
            this.setState({courses: res.data});
        });
    }

    addCourse = (data) => {

        axios.post('http://localhost:5000/courses', data).then(res => {
            this.setState({courses: this.state.courses.concat(res.data)})
            
        }).catch(err => {
            console.log(err);
        })
        console.log('clicked');
    }

    render() {
        console.log('render course');

        return (

            <div className='container mt-3'>

                <AddCourse  addCourse={this.addCourse}/>

                <div className="row">
                    {
                        this.state.courses != null ?
                            this.state.courses.map(course => {
                                return (
                                    <Course course={course} key={course.courseId} />
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
